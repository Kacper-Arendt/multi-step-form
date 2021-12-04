import React from "react";
import styled from "styled-components";
import {IStepProps} from "./Main";
import {FormStyles} from "../ui/Form";
import {Button} from "../ui/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const CharacterData = styled.div`
  ${FormStyles};
  flex-direction: column;
  align-items: start;
  row-gap: 1rem;
  border: 2px solid black;
  
  button{
    align-self: center;
  }
`;

export const Summary = (props: IStepProps) => {
    const clearData = () => {
        props.clearData!();
    }

    return (
        <Wrapper>
            <CharacterData>
                <p>You choose the {props.values.side}</p>
                <p>Name: {props.values.name}</p>
                <p>Planet: {props.values.planet}</p>
                <p>Gender: {props.values.gender}</p>
                <p>Age: {props.values.age}</p>
                <p>Skin color: {props.values.skinColor}</p>
                <p>Hair color: {props.values.hairColor}</p>
                <Button type='button' onClick={clearData}>try again</Button>
            </CharacterData>
        </Wrapper>
    )
}