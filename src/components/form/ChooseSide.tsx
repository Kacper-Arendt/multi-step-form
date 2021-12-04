import React from "react";
import styled from "styled-components";
import {IStepProps, Side} from "./Main";

const yoda = "https://ik.imagekit.io/kacper/mulkti-form/milton-wiklund-R5esYAv65t4-unsplash__1__1__1__LXRvTqF1o3.png?updatedAt=1638040780059"
const darthVader = 'https://ik.imagekit.io/kacper/mulkti-form/tommy-van-kessel-_sDlQf6f7gc-unsplash_1__1__ojKoyuA8v.png?updatedAt=1638040773802'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 50%;

  img {
    width: 80%;
    max-width: 30rem;
  }
`;

const Arrow = styled.div`
  margin: 3em auto;
  border: 2em solid transparent;
  border-top: 2em solid #000;
  -webkit-animation: moveArrow 0.6s infinite alternate ease-in-out;
  animation: moveArrow 0.6s infinite alternate ease-in-out;
  cursor: pointer;

  @keyframes moveArrow {
    0% {
      transform: translateY(0);
      opacity: 0.4;
    }
    100% {
      transform: translateY(0.4em);
      opacity: 0.9
    }
  }
  @-webkit-keyframes moveArrow {
    0% {
      transform: translateY(0);
      opacity: 0.4;
    }
    100% {
      transform: translateY(0.4em);
      opacity: 0.9
    }
  }
`;

export const ChooseSide = (props: IStepProps) => {

    const chooseDarkSideHandler = (val: Side) => {
        props.chooseSide!(val);
        props.changeStep!(2);
    };

    return (
        <Wrapper>
            <StyledDiv>
                <img src={yoda} alt="Yoda"/>
                <Arrow onClick={() => chooseDarkSideHandler(Side.lightSide)}/>
            </StyledDiv>
            <StyledDiv>
                <img src={darthVader} alt="Darth Vader"/>
                <Arrow onClick={() => chooseDarkSideHandler(Side.darkSide)}/>
            </StyledDiv>
        </Wrapper>
    )
}