import Styled from 'styled-components';

import { Button } from 'Components/Button'; // Button 컴포넌트 import
import { Link } from 'react-router-dom';

interface Props {
  readonly label: string;
  readonly id: number;
  readonly onDelete?: () => void;
}

const Container = Styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const Label = Styled(Link)`
  flex: 1;
  text-decoration: none;
  font-size: 16px;
  margin-right: 20px;
`;

export const ToDoItem = ({ id, label, onDelete }: Props) => {
  return (
    <Container>
      <Label to={`/detail/${id}`}>{label}</Label>
      <Button
        label="삭제"
        backgroundColor="#FF1744"
        hoverColor="#F01440"
        onClick={onDelete}
      />
    </Container>
  );
};
