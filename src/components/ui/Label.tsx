import React, {ReactNode} from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  row-gap: .5rem;

  font-size: 1.5rem;

  input, select {
    padding: 1rem;
    border-radius: .8rem;
    border: 2px solid black;
    background-color: rgba(208, 208, 208, 0.2);

    :active, :focus {
      outline: none;
    }
  }
`;

export const Label = (props: { children?: ReactNode }) => {
    return (
        <StyledLabel>
            {props.children}
        </StyledLabel>
    )
}