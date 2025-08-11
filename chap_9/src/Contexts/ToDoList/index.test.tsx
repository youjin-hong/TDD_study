import React, { useContext } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ToDoListContext, ToDoListProvider } from 'src/Contexts/ToDoList';

// beforeEach는 각각의 테스트 명세가 실행되기 전에 실행되는 함수로,
// 각 테스트 명세가 실행되기 전에 준비해야 할 내용을 작성할 때 사용합니다.
beforeEach(() => {
  // localStorage는 데이터를 영구적으로 저장하므로
  // 항상 깨끗이 지우지 않는다면 테스트가 의도된 바와 다르게 동작할 수 있습니다.
  localStorage.clear();
});

describe('ToDoList Context', () => {
  it('renders component correctly', () => {
    // 우리가 만든 컨텍스트는 children이라는 필수 props를 갖고 있기 때문에 전달해야 합니다.
    const ChildComponent = () => {
      return <div>Child Component</div>;
    };
    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>
    );

    // 컨텍스트와 함께 렌더링한 컴포넌트가 화면에 잘 표시되는지,
    // 아무 동작을 하지 않았으므로 localStorage가 비어있는지 등을 테스트합니다.
    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
    expect(localStorage.getItem('ToDoList')).toBeNull();
  });

  // localStorage에 데이터가 존재할 때, 해당 데이터를 localStorage로부터 불러와서
  // 컨텍스트에 잘 저장하는지 테스트하는 테스트 명세를 작성합니다.
  it('loads localStorage data and sets it to state', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    const ChildComponent = () => {
      const { toDoList } = useContext(ToDoListContext);
      return (
        <div>
          {toDoList.map((toDo) => (
            <div key={toDo}>{toDo}</div>
          ))}
        </div>
      );
    };
    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>
    );

    expect(screen.getByText('ToDo 1')).toBeInTheDocument();
    expect(screen.getByText('ToDo 2')).toBeInTheDocument();
    expect(screen.getByText('ToDo 3')).toBeInTheDocument();
  });

  // 이제 컨텍스트에 데이터를 추가하거나 삭제하는 테스트 명세를 작성합니다.
  it('uses addToDo function', () => {
    const ChildComponent = () => {
      // 컨텍스트에 데이터를 추가하기 위해 addToDo 함수를 사용합니다.
      const { toDoList, addToDo } = useContext(ToDoListContext);
      return (
        <div>
          <div onClick={() => addToDo('study react 1')}>Add ToDo</div>
          <div>
            {toDoList.map((toDo) => (
              <div key={toDo}>{toDo}</div>
            ))}
          </div>
        </div>
      );
    };
    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>
    );

    // 마지막으로, localStorage가 비어있는지 확인하고,
    // addToDo 함수를 연결한 버튼을 클릭해 임의로 만든 할 일 데이터가 localStorage에
    // 잘 저장되고 화면에 잘 표시되는지 테스트합니다.
    expect(localStorage.getItem('ToDoList')).toBeNull();
    const button = screen.getByText('Add ToDo');
    fireEvent.click(button);
    expect(screen.getByText('study react 1')).toBeInTheDocument();
    expect(localStorage.getItem('ToDoList')).toBe('["study react 1"]');
  });

  // 이제 추가된 데이터를 삭제하기 위한 deleteToDo 함수를 테스트합니다.
  it('uses deleteToDo function', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    const ChileComponent = () => {
      const { toDoList, deleteToDo } = useContext(ToDoListContext);
      return (
        <div>
          {toDoList.map((toDo, index) => (
            <div key={toDo} onClick={() => deleteToDo(index)}>
              {toDo}
            </div>
          ))}
        </div>
      );
    };
    render(
      <ToDoListProvider>
        <ChileComponent />
      </ToDoListProvider>
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();
    fireEvent.click(toDoItem);
    expect(toDoItem).not.toBeInTheDocument();
    expect(
      JSON.parse(localStorage.getItem('ToDoList') as string)
    ).not.toContain('ToDo 2');
  });
});
