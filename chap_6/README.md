## ✨ 6. Props와 State

### <span style="background-color:lavender">Props와 State란</span>

**Props (Properties)**
부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터
자식 컴포넌트에서는 변경 불가능 (읽기 전용)
컴포넌트의 **속성(Properties)**을 의미

**State**
한 컴포넌트 안에서 유동적인 데이터를 다룰 때 사용
컴포넌트 내부에서 변경 가능
컴포넌트의 **상태(State)**를 나타냄

<br />

### <span style="background-color:lavender">프로젝트 설정</span>

**<span style="background-color:yellow">프로젝트 생성</span>**

```bash
cd chap_6
npx create-react-app todo-list --template=typescript
```

<br />

**<span style="background-color:yellow">필요한 라이브러리 설치</span>**.

```bash
cd chap_6
npm install --save-dev styled-components
npm install --save-dev @types/styled-components jest-styled-components
npm install --save-dev husky lint-stated prettier
```

<br />

**<span style="background-color:yellow">Prettier 설정(.prettierrc.js)</span>**

```javascript
module.exports = {
  jsxBracketSameLine: true,
  singleQuote: true,
  tailingComma: "all",
  printWidth: 100,
};
```

<br />

**<span style="background-color:yellow">package.json에 husky, lint-staged 설정</span>**

```json
  "scripts": {...},
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,css,scss,md}": [
      "prettier --write"
    ]
  },
```

<br />

**<span style="background-color:yellow">절대 경로 설정(tsconfig.json)</span>**
마지막으로 lint-staged와 husky를 설정하기 위해 package.json 파일을 수정했다면 절대 경로를 추가하기 위해 tsconfig.json에 `"baseUrl": "src"`를 추가해줍니다.

<br />

### <span style="background-color:lavender">컴포넌트별 할일 목록 앱 개발하기</span>

**<span style="background-color:yellow">Button 컴포넌트</span>**

```jsx
import React from "react";
import Styled from "styled-components";

interface ContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}

const Container = Styled.button<ContainerProps>`
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = Styled.div`
  color: #FFFFFF;
  font-size: 16px;
`;

export const Button = ({
  label,
  backgroundColor = "#304FFE",
  hoverColor = "#1E40FF",
  onClick,
}: Props) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      <Label>{label}</Label>
    </Container>
  );
};
```

<br />

**<span style="background-color:yellow">Input 컴포넌트</span>**

```jsx
import React from "react";
import Styled from "styled-components";

interface Props {
  readonly placeholders?: string;
  readonly value?: string;
  readonly onChange?: (text: string) => void;
}

const InputBox = Styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  outline: none;
`;

export const Input = ({ placeholders, value, onChange }: Props) => {
  return (
    <InputBox
      placeholder={placeholders}
      value={value}
      onChange={(event) => {
        if (typeof onChange === "function") {
          onChange(event.target.value);
        }
      }}
    />
  );
};
```

<br />

**<span style="background-color:yellow">ToDoItem 컴포넌트</span>**

```jsx
import React from "react";
import Styled from "styled-components";

import { Button } from "Components/Button";

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}

const Container = Styled.div`
  display: flex;
  border-bottom: 1px sold #BDBDBD;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const Label = Styled.div`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
`;

export const ToDoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button
        label="삭제"
        backgroundColor="#FF1744"
        hoverColor="#F01440"
        onClick={onDelete}
      />
    </Container>
  );
};
```

<br />

### <span style="background-color:lavender">State 활용하기</span>

**<span style="background-color:yellow">App 컴포넌트 - useState Hook 사용</span>**

```jsx
import React, { useState } from "react";
import Styled from "styled-components";
import { Button, Input, ToDoItem } from "Components";

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const ToDoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`;

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (): void => {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      setToDo("");
    }
  };

  const deleteTodo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  };

  return (
    <Container>
      <Contents>
        <ToDoListContainer>
          {toDoList.map((item, index) => (
            <ToDoItem
              key={item}
              label={item}
              onDelete={() => deleteTodo(index)}
            />
          ))}
        </ToDoListContainer>
        <Input
          placeholders="할 일을 입력해 주세요."
          onChange={(text) => setToDo(text)}
        />
        <Button label="추가" onClick={addToDo} />
      </Contents>
    </Container>
  );
}

export default App;
```

<br />

### <span style="background-color:lavender">테스트 코드 작성</span>

**<span style="background-color:yellow">Button 컴포넌트 테스트 코드 작성</span>**
Button 컴포넌트 폴더 아래에 index.test.tsx 파일을 만들어 아래와 같이 작성해 줍니다.

```javascript
describe("<Button />", () => {
  it("renders component correctly and applies styles", () => {
    const { container } = render(<Button label="Button Test" />);

    const buttonElement = screen.getByRole("button", { name: "Button Test" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyleRule("background-color", "#304FFE");
  });

  it("clicks the button", () => {
    const handleClick = jest.fn();
    render(<Button label="Button Test" onClick={handleClick} />);

    const label = screen.getByText("Button Test");
    fireEvent.click(label);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

<br />

**<span style="background-color:yellow">Input 컴포넌트 테스트 코드 작성</span>**

```jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Input } from 'Components/Input';

describe('<Input />', () => {
  it('renders component correctly', () => {
    const { container } = render(<Input value="default value" />);

    const input = screen.getByDisplayValue('default value');
    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders placeholder correctly', () => {
    render(<Input placeholders="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder');
    expect(input).toBeInTheDocument();
  });

  it('changes the data', () => {
    render(<Input placeholders="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'study react' } });
    expect(input.value).toBe('study react');
  });
});
```

<br />

**<span style="background-color:yellow">ToDoItem 컴포넌트 테스트 코드 작성</span>**

```jsx
describe("<Input />", () => {
  it("renders component correctly", () => {
    const { container } = render(<ToDoItem label="default value" />);

    const todoItem = screen.getByText("default value");
    expect(todoItem).toBeInTheDocument();

    const deleteButton = screen.getByText("삭제");
    expect(deleteButton).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("clicks the delete button", () => {
    const handleClick = jest.fn();
    render(<ToDoItem label="default value" onDelete={handleClick} />);

    const deleteButton = screen.getByText("삭제");
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

<br />

**<span style="background-color:yellow">App 컴포넌트 테스트 코드 작성</span>**

```jsx
describe("<App />", () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);

    const toDoList = screen.getByTestId("toDoList");
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요.");
    expect(input).toBeInTheDocument();
    const label = screen.getByText("추가");
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("adds and deletes ToDo items", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요.");
    const button = screen.getByText("추가");
    fireEvent.change(input, { target: { value: "study react 1" } });
    fireEvent.click(button);

    const todoItem = screen.getByText("study react 1");
    expect(todoItem).toBeInTheDocument();
    const deleteButton = screen.getByText("삭제");
    expect(deleteButton).toBeInTheDocument();

    const toDoList = screen.getByTestId("toDoList");
    expect(toDoList.childElementCount).toBe(1);

    fireEvent.change(input, { target: { value: "study react 2" } });
    fireEvent.click(button);

    const todoItem2 = screen.getByText("study react 2");
    expect(todoItem2).toBeInTheDocument();
    expect(toDoList.childElementCount).toBe(2);

    const deleteButtons = screen.getAllByText("삭제");
    fireEvent.click(deleteButtons[0]);

    expect(todoItem).not.toBeInTheDocument();
    expect(toDoList.childElementCount).toBe(1);
  });

  it("does not add empty ToDo", () => {
    render(<App />);

    const toDoList = screen.getByTestId("toDoList");
    const length = toDoList.childElementCount;

    const button = screen.getByText("추가");
    fireEvent.click(button);

    expect(toDoList.childElementCount).toBe(length);
  });
});
```

> **💡핵심 포인트**

- **props와 state 비교**: 아래 표 참조
- **Typescript 인터페이스로 Props 타입 안전성 확보**
- **선택적 Porps는 `?`와 기본값 활용**
- **이벤트 핸들링은 Props로 전달**
- **컴포넌트 재사용을 고려한 설계 in React**
- **export와 export default의 차이**

| 구분            | Props                  | State              |
| --------------- | ---------------------- | ------------------ |
| **데이터 방향** | 부모 → 자식            | 컴포넌트 내부      |
| **변경 가능성** | 불가능 (읽기 전용)     | 가능               |
| **용도**        | 컴포넌트 속성 설정     | 동적 데이터 관리   |
| **선언 방식**   | 인터페이스로 타입 정의 | useState Hook 사용 |
