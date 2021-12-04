import React, {useEffect, useState} from "react";
import {Button, Form, Label} from "../Components";
import {IStepProps} from "./Main";

interface IPlanet {
    id: number,
    name: string
}

export const ChoosePlanet = (props: IStepProps) => {
    const [planets, setPlanets] = useState<Array<IPlanet>>();

    useEffect(() => {
        const fetchPlanets = async () => {
            let planetArr: Array<IPlanet> = []
            const request = await fetch('https://swapi.dev/api/planets/')
            const response = await request.json();

            if (response.results) {
                response.results.forEach((planet: IPlanet) => {
                    planetArr.push({id: planet.id, name: planet.name})
                })
                setPlanets(planetArr);
            }
        }
        fetchPlanets()
    }, []);

    return (
            <Form onSubmit={()=>props.changeStep(4)}>
                <Label>
                    Choose planet:
                    <select name="planet" defaultValue={'earth'} onChange={props.handleChange}>
                        {planets &&
                        <>
                            <option value="Earth" key='earth'>Earth</option>
                            {planets.map(el => {
                                return <option value={el.name} key={el.name}>{el.name}</option>
                            })}
                        </>
                        }
                    </select>
                </Label>
                <Button type='button' onClick={()=>props.changeStep(3)}>Back</Button>
                <Button type='submit'>Next</Button>
            </Form>
    )
}