import React, { Component } from "react";
import Styled from "styled-components";

import { Button } from "Components/Button";  // Button 컴포넌트 import

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}

const Container = Styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
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
