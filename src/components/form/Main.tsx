import React, {useState} from "react";
import {ChooseSide} from "./ChooseSide";
import {PersonData} from "./PersonData";

interface Steps {
    step: number,
    side: 'Dark Side' | 'Light Side' | string,
}

export interface IStepProps {
    values?: Steps,
    nextStep: () => void,
    prevStep?: () => void,
    handleChange?: (e: React.ChangeEvent<any>) => void,
    chooseSide?: () => void
}

export const Main = () => {
    const [data, setData] = useState<Steps>({
        step: 1,
        side: 'Light Side',
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
            return <ChooseSide
                values={data}
                nextStep={nextStep}
                chooseSide={() => setData({...data, side: "Dark Side"})}
            />
        case 2:
            return <PersonData
                values={data}
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
            />
        default:
            return <p>Something went wrong</p>
    }
}