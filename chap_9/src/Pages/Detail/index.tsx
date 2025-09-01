import { Button } from 'Components/Button';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToDoListContext } from 'src/Contexts/ToDoList';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  flex-direction: column;
`;

const ToDo = styled.div`
  min-width: 350px;
  height: 350px;
  overflow-y: auto;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
  padding: 10px;
`;

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // ✅ 제네릭으로 id 타입 지정

  if (!id) {
    // 라우트 파라미터가 없을 때 처리
    navigate(-1);
    return null;
  }

  const index = Number.parseInt(id, 10);
  const { toDoList, deleteToDo } = useContext(ToDoListContext);
  const toDo = toDoList[index];

  return (
    <Container>
      <ToDo>{toDo}</ToDo>
      <Button
        label="삭제"
        backgroundColor="#FF1744"
        hoverColor="#F01440"
        onClick={() => {
          deleteToDo(index);
          navigate(-1);
        }}
      />
    </Container>
  );
};
