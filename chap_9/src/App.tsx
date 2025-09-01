import { PageHeader } from 'Components/PageHeader';
import { Route, Routes } from 'react-router-dom';
import { ToDoListProvider } from 'src/Contexts/ToDoList';
import { Detail, List, NotFound } from 'src/Pages';
import { Add } from 'src/Pages/Add';
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
        <PageHeader />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
