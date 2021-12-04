import React, {ReactNode} from "react";
import styled, {css} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const FormStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  row-gap: .6rem;
  width: 80%;
  max-width: 45rem;
  padding: 2rem;
  border-radius: 3rem;
  background-color: rgba(119, 107, 107, .5);
  font-size: 1.3rem;
`;

const StyledForm = styled.form`
${FormStyles};
`;

interface IForm {
    onSubmit: () => void,
    children?: ReactNode,
}

export const Form = (props: IForm) => {
    return (
        <Wrapper>
            <StyledForm onSubmit={props.onSubmit}>
                {props.children}
            </StyledForm>
        </Wrapper>
    )
}