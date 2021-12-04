import React from "react";
import {Gender, IStepProps} from "./Main";
import {Form, Button, Label} from "../Components";

export const PersonData = (props: IStepProps) => {
    return (
        <Form onSubmit={() => props.changeStep(3)}>
            <Label>
                Name:
                <input name='name' defaultValue={props.values.name} onChange={props.handleChange} type="text" required
                       minLength={2}/>
            </Label>
            <Label>
                Age:
                <input name='age' defaultValue={ props.values.age} onChange={props.handleChange} type="number" required/>
            </Label>
            <Label>
                Skin color:
                <input name='skinColor' defaultValue={props.values.skinColor} onChange={props.handleChange} type="text"
                       required minLength={2}/>
            </Label>
            <Label>
                Hair color:
                <input name='hairColor' defaultValue={props.values.hairColor} onChange={props.handleChange} type="text"
                       required minLength={2}/>
            </Label>
            <Label>
                Gender:
                <select name="gender" defaultValue={props.values.gender} onChange={props.handleChange}>
                    <option value={Gender.male}>Male</option>
                    <option value={Gender.female}>Female</option>
                </select>
            </Label>
            <Button type='button' onClick={()=> props.changeStep(1)}>Back</Button>
            <Button type='submit'>Next</Button>
        </Form>
    )
}