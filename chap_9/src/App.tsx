import { InputContainer } from 'Components/InputContainer';
import { ToDoList } from 'Components/ToDoList';
import { Route, Routes } from 'react-router-dom';
import { ToDoListProvider } from 'src/Contexts/ToDoList';
import { List } from 'src/Pages';
import Styled from 'styled-components';

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
