import React, {useState} from "react";
import {ChooseSide} from "./ChooseSide";

interface Steps {
    step: number,
}

export interface IStepProps {
    values?: Steps,
    nextStep?: () => void,
    prevStep?: () => void,
    handleChange?: (e: React.ChangeEvent<any>) => void,
}

export const Main = () => {
    const [data, setData] = useState<Steps>({
        step: 1,
    });

    const nextStep = (): void => {
        setData({...data, step: data.step + 1});
    };

    const prevStep = (): void => {
        setData({...data, step: data.step - 1});
    };

    const handleChange = (e: React.ChangeEvent<any>): void => {
        setData({...data, [e.target.name]: e.target.value});
    };

    switch (data.step) {
        case 1:
            return <ChooseSide nextStep={nextStep}/>
        default:
            return <p>Something went wrong</p>
    }
}