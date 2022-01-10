import React from 'react'
import styled, {keyframes}  from 'styled-components'

const move = (width) => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${width};
  }
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;

const Text = styled.span`
  font-size: 1rem;
  color: white;
  margin-bottom: 7px;

  @media (max-width: 425px) {
    font-size: 0.7rem;
  }
`;

const Line = styled.div`
  width: 100%;
  background-color: #373737;
  height: 2px;
  position: relative;
`;

const DataLine = styled.div`
  width: ${(props) => props.width};
  background-color: ${props => props.color};
  height: 2px;
  position: absolute;
  animation: ${(props) => move(props.width)} 3s linear;
`;

const SkillBar = (props) => {
  return (
    <Holder>
      <Text>
        {props.text}
      </Text>
      <Line>
        <DataLine width={props.width} color={props.color}/>
      </Line>
    </Holder>
  )
}

export default SkillBar;
