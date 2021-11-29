import React from "react";
import {IStepProps} from "./Main";
import {Form, Button, Label} from "../Components";

export const PersonData = (props: IStepProps) => {
    return (
            <Form onSubmit={props.nextStep}>
                <Label>
                    Name:
                    <input name='name' defaultValue={props.values.name} onChange={props.handleChange} type="text" required minLength={2}/>
                </Label>
                <Label>
                    Age:
                    <input name='age' defaultValue={props.values.age} onChange={props.handleChange} type="number" required/>
                </Label>
                <Label>
                    Skin color:
                    <input name='skinColor' defaultValue={props.values.skinColor} onChange={props.handleChange} type="text" required minLength={2}/>
                </Label>
                <Label>
                    Hair color:
                    <input name='hairColor' defaultValue={props.values.hairColor} onChange={props.handleChange} type="text" required minLength={2}/>
                </Label>
                <Label>
                    Gender:
                    <select name="gender" defaultValue={props.values.gender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </Label>
                <Button type='button' onClick={props.prevStep}>Back</Button>
                <Button type='submit'>Next</Button>
            </Form>
    )
}