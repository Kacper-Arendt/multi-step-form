import React, {useState} from "react";
import {ChoosePlanet, ChooseSide, PersonData, Summary} from "../Components";

export enum Side {
    darkSide = 'Dark Side',
    lightSide = 'Light Side',
}

export enum Gender {
    male = 'Male',
    female = 'Female'
}

interface Steps {
    step: number,
    side: Side
    name: string,
    age: number,
    skinColor: string,
    hairColor: string,
    gender: Gender,
    planet: string,
}

export interface IStepProps {
    values: Steps,
    changeStep: (step: number) => void,
    handleChange?: (e: React.ChangeEvent<any>) => void,
    chooseSide?: (val: Side) => void,
    clearData?: () => void,
}

const initVal = {
    step: 1,
    side: Side.lightSide,
    name: '',
    age: 1  ,
    skinColor: '',
    hairColor: '',
    gender: Gender.male,
    planet: 'Earth',
}

export const Main = () => {
    const [data, setData] = useState<Steps>(initVal);

    const changeStep = (vel: number) => {
        setData({...data, step: vel})
    }

    const handleChange = (e: React.ChangeEvent<any>): void => {
        setData({...data, [e.target.name]: e.target.value});
    };

    switch (data.step) {
        case 1:
            return <ChooseSide
                values={data}
                changeStep={(vel) => changeStep(vel)}
                chooseSide={(val) => setData({...data, side: val})}
            />
        case 2:
            return <PersonData
                values={data}
                changeStep={(vel) => changeStep(vel)}
                handleChange={handleChange}
            />
        case 3:
            return <ChoosePlanet
                values={data}
                changeStep={(vel) => changeStep(vel)}
                handleChange={handleChange}
            />
        case 4:
            return <Summary
                values={data}
                changeStep={(vel) => changeStep(vel)}
                clearData={() => setData(initVal)}
            />
        default:
            return <p>Something went wrong</p>
    }
}