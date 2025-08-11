import { fireEvent, render, screen } from '@testing-library/react';

import { ToDoListProvider } from 'src/Contexts/ToDoList';
import { ToDoList } from 'Components/ToDoList';

describe('<ToDoList />', () => {
  // 우선 ToDoList 컴포넌트가 화면에 잘 표시되는 지 확인합니다.
  it('renders component correctly', () => {
    const { container } = render(
      <ToDoListProvider>
        <ToDoList />
      </ToDoListProvider>
    );

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    expect(container).toMatchSnapshot();
  });

  // 이제 데이터가 있는 경우, 화면에 할 일 목록이 잘 표시되는지 확인합니다.
  it('shows toDo list', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(
      <ToDoListProvider>
        <ToDoList />
      </ToDoListProvider>
    );

    expect(screen.getByText('ToDo 1')).toBeInTheDocument();
    expect(screen.getByText('ToDo 2')).toBeInTheDocument();
    expect(screen.getByText('ToDo 3')).toBeInTheDocument();
    expect(screen.getAllByText('삭제').length).toBe(3);
  });

  // 마지막으로, 표시된 할 일 목록 데이터를 삭제하는 테스트 명세를 작성합니다.
  it('deletes toDo item', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(
      <ToDoListProvider>
        <ToDoList />
      </ToDoListProvider>
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();
    fireEvent.click(toDoItem.nextElementSibling as HTMLElement);
    expect(toDoItem).not.toBeInTheDocument();
    expect(
      JSON.parse(localStorage.getItem('ToDoList') as string)
    ).not.toContain('ToDo 2');
  });
});
