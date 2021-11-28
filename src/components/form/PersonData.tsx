import React from "react";
import styled from "styled-components";
import {IStepProps} from "./Main";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
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

const Label = styled.label`
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

;

const Button = styled.button`
  margin-top: 1rem;
  padding: .7rem 1.4rem;
  border: 2px solid black;
  border-radius: .8rem;

  background: #3C3C3B;
  font-size: 1.4em;
  font-weight: bold;
  color: white;
`;

export const PersonData = (props: IStepProps) => {
    return (
        <Wrapper>
            <Form onSubmit={props.nextStep}>
                <Label>
                    Name:
                    <input name='firstname' onChange={props.handleChange} type="text" required minLength={2}/>
                </Label>
                <Label>
                    Age:
                    <input name='age' onChange={props.handleChange} type="number" required/>
                </Label>
                <Label>
                    Skin color:
                    <input name='skinColor' onChange={props.handleChange} type="text" required minLength={2}/>
                </Label>
                <Label>
                    Hair color:
                    <input name='surname' onChange={props.handleChange} type="text" required minLength={2}/>
                </Label>
                <Label>
                    Gender:
                    <select name="gender" defaultValue='male'>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </Label>
                <Button type='button' onClick={props.prevStep}>Back</Button>
                <Button type='submit'>Next</Button>
            </Form>
        </Wrapper>
    )
}