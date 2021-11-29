import React from "react";
import {Button, Form, Label} from "../Components";
import {IStepProps} from "./Main";

export const ChoosePlanet = (props: IStepProps) => {

    return (
        <Form onSubmit={props.nextStep}>
            <Label>
                Choose planet:
                <select name="planet">
                    <option value="earth">Earth</option>
                </select>
            </Label>
            <Button type='button' onClick={props.prevStep}>Back</Button>
            <Button type='submit'>Next</Button>
        </Form>
    )
}