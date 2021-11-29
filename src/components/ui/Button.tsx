import React, {ReactNode} from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: .7rem 1.4rem;
  border: 2px solid black;
  border-radius: .8rem;

  background: #3C3C3B;
  font-size: 1.4em;
  font-weight: bold;
  color: white;
`;

interface IProps {
    type: 'submit' | 'button',
    onClick?: () => void,
    children: ReactNode,
}

export const Button = (props: IProps) => {
    return (
        <StyledButton type={props.type} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}