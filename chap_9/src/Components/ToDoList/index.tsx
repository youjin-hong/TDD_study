import React, { useContext } from 'react';
import styled from 'styled-components';

import { ToDoItem } from 'Components/ToDoItem';

import { ToDoListContext } from 'src/Contexts/ToDoList';

const Container = styled.div`
  width: 350px;
  min-height: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;

export const ToDoList = () => {
  const { toDoList, deleteToDo } = useContext(ToDoListContext);

  return (
    <Container data-testid="toDoList">
      {toDoList.map((item, index) => (
        <ToDoItem key={item} label={item} onDelete={() => deleteToDo(index)} />
      ))}
    </Container>
  );
};
