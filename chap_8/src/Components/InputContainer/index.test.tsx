import { fireEvent, render, screen } from '@testing-library/react';

import { InputContainer } from 'Components/InputContainer';
import { ToDoListProvider } from 'src/Contexts/ToDoList';

describe('<InputContainer />', () => {
  it('renders component correctly', () => {
    const { container } = render(<InputContainer />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요.');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('추가');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  // 이제 InputContainer 컴포넌트의 State를 테스트하는 명세를 추가해줍니다.
  it('empties data after adding data', () => {
    render(<InputContainer />);

    const input = screen.getByPlaceholderText(
      '할 일을 입력해 주세요.'
    ) as HTMLInputElement;
    const button = screen.getByText('추가');

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'study react 1' } });
    expect(input.value).toBe('study react 1');
    fireEvent.click(button);
    expect(input.value).toBe('');
  });

  // 마지막으로 컨텍스트를 사용하는 부분을 테스트합니다.
  it('adds input data to localStorage via Context', () => {
    render(
      <ToDoListProvider>
        <InputContainer />
      </ToDoListProvider>
    );

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요.');
    const button = screen.getByText('추가');

    expect(localStorage.getItem('ToDoList')).toBeNull();

    fireEvent.change(input, { target: { value: 'study react 1' } });
    fireEvent.click(button);

    expect(localStorage.getItem('ToDoList')).toBe('["study react 1"]');
  });
});
