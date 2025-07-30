지난 시간에 리액트의 역사와 자바스크립트 테스트 프레임워크인 Jest에 대해서 간략하게 살펴보았습니다. 이번 시간에는 React 프로젝트를 만들고, react-testing-library에 대해 실습해보는 시간을 가져보겠습니다.

이번 장에서 create-react-app을 CRA라고 부르도록 하겠습니다.

[@testing-library 공식 문서](https://testing-library.com/)
[react-testing-library Github](https://github.com/testing-library/react-testing-library)

---

## ✨ 4. 리액트 테스트: react-testing-library

### <span style="background-color:lavender">react-testing-library</span>

**React Testing Library**는 React 컴포넌트를 테스트하기 위한 DOM 테스팅 라이브러리입니다. Jest가 일반적인 Javascript 테스트 프레임워크라면, React Testing Library는 JSX와 DOM을 다루는 React 컴포넌트를 위한 테스트 도구입니다.

<br />

**<span style="background-color:yellow">react-testing-library의 장점</span>**

- **사용자 중심 테스트 유틸리티 제공**
  - 실제 사용자가 DOM을 사용하는 방식과 유사하게 테스트 작성
  - 텍스트, 링크, 버튼 등을 사용자 관점에서 찾아 테스트
- **구현 세부사항과 분리된 테스트**

  - 컴포넌트의 내부 구현 방식이 아닌 결과물을 테스트
  - 리팩토링 시에도 테스트 코드 수정 불필요
  - 장기간 유지 가능한 안정적인 테스트 코드 ➡️ 개발 생산성 향상

- ** 실제 DOM 환경에서 테스트**

  - react-dom 위에서 동작하여 더 신뢰할 수 있는 테스트
  - 인스턴스가 아닌 메모리상에 실제 DOM을 생성해 테스트하므로 정확도 높음

  <br />

**<span style="background-color:yellow">프로젝트 준비</span>**
react-testing-library는 리액트의 컴포넌트를 테스트하기 위한 라이브러리이므로 리액트 프로젝트를 하나 생성해줍니다.

다음 명령어를 chap_4 폴더 위치에서 react-testing-library를 사용할 리액트 프로젝트를 만들어주었습니다.
`npx create-react-app react-testing-library-test`

<br/>

### <span style="background-color:lavender">react-testing-library 설치 및 설정</span>

react-testing-library는 Jest와 마찬가지로 CRA로 생성한 리액트 프로젝트에 기본적으로 같이 설치됩니다. 저는 CRA을 사용하여 리액트 프로젝트를 생성했기 때문에 추가적인 라이브러리 설치를 진행하지 않았습니다.

만약, CRA로 프로젝트를 생성하지 않는 경우(eg. Vite)에는 다음의 명령어를 실행하여 react-testing-library를 설치해야 합니다.
`npm install --save-dev @testing-library/react`

<br />

### <span style="background-color:lavender">기본 사용법</span>

**<span style="background-color:yellow">기본 테스트 구조</span>**

```javascript
// src/App.test.js의 기본 구조
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

**<span style="background-color:yellow">핵심 함수들</span>**

- `render()`
  - React 컴포넌트를 메모리상의 DOM에 렌더링
  - 다양한 유용한 객체들을 반환 (container, screen 등)
- `screen`
  - 렌더링된 화면(DOM)에 접근하는 객체
  - 다양한 요소 검색 메서드 제공
- `container`
  - render 함수가 반환하는 객체 중 하나
  - 리액트 컴포넌트가 화면에 표시되는 부분을 담고 있는 객체

 <br />
 
### <span style="background-color:lavender">실전 테스트 예제</span>

**<span style="background-color:yellow">전체 App.test.js 코드</span>**

```javascript
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);

    // 링크 요소 테스트
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    // 이미지 요소 테스트
    expect(container.getElementsByClassName("App-logo")).toHaveLength(1);
    expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
      "src",
      "logo.svg"
    );

    // 문단 요소 테스트
    expect(container.getElementsByTagName("p")).toHaveLength(1);
    expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
      "Edit src/App.js and save to reload"
    );

    // 스냅샷 테스트
    expect(container).toMatchSnapshot();
  });
});
```

**<span style="background-color:yellow">주요 검증 함수들</span>**

- `toBeInTheDocument()`: DOM에 존재하는지 확인
- `toHaveLength()`: 요소의 개수 확인
- `toHaveAttribute()`: 속성값 확인
- `toHaveTextContent()`: 텍스트 내용 확인

<br />

### <span style="background-color:lavender">스냅샷 테스트</span>

**<span style="background-color:yellow">목적과 동작</span>**

- 컴포넌트의 렌더링 결과를 파일로 저장하여 변경사항 감지
- 의도치 않은 UI 변경을 방지하는 안전장치
- `src/__snapshots__/` 폴더에 `App.test.js.snap` 파일 생성

**<span style="background-color:yellow">스냅샷 업데이트</span>**

```bash
# 테스트 실행 중 터미널에 'u' 키를 눌러 스냅샷 업데이트 가능
npm run test
```

테스트를 통과하면 아래와 같은 결과를 확인할 수 있습니다.

```bash
PASS  src/App.test.js
  <App />
    ✓ renders component correctly (35 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

> \*\*💡핵심 포인트

- Jest와 함께 사용: React Testing Library는 테스트 실행기가 아니므로 Jest와 함께 사용해야 함
- 사용자 관점 중심: 개발자가 아닌 실제 사용자가 보고 사용하는 관점에서 테스트 작성
- 결과 중심 테스트: "어떻게 구현"이 아닌 "사용자에게 무엇이 보이는지"에 집중
