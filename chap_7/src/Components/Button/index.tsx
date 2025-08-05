import React, {Component} from "react";
import Styled from "styled-components";

interface ContainerProps {
  readonly $backgroundColor: string; // 대소문자 수정
  readonly $hoverColor: string;      // 대소문자 수정
}

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;  // 대소문자 수정
  readonly hoverColor?: string;       // 대소문자 수정
  readonly onClick?: () => void;
}

const Container = Styled.button<ContainerProps>`
  text-align: center;
  background-color: ${(props) => props.$backgroundColor};  // 스타일로 변환됨
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$hoverColor};  // 스타일로 변환됨
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = Styled.div`
  color: #FFFFFF;
  font-size: 16px;
`;

export class Button extends Component<Props> {
  render() {
    const {
      label, backgroundColor = '#304FFE', hoverColor='#1E40FF', onClick
    } = this.props;

    return (
      <Container $backgroundColor={backgroundColor} $hoverColor={hoverColor} onClick={onClick}>
      <label>{label}</label>
      </Container>
    )
  }
}
/**
 export const Button = ({
  label,
  backgroundColor = "#304FFE",   // 대소문자 수정
  hoverColor = "#1E40FF",         // 대소문자 수정
  onClick,
}: Props) => {
  return (
    <Container
      backgroundColor={backgroundColor}  // DOM에 직접 전달되지 않음, 스타일로 적용
      hoverColor={hoverColor}            // DOM에 직접 전달되지 않음, 스타일로 적용
      onClick={onClick}
    >
      <Label>{label}</Label>
    </Container>
  );
};

 */