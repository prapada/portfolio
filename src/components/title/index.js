import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  color:${props => `rgba(252, 246, 244, 0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;

  @media (max-width: 425px) {
    font-size: 4rem;
  }
`;

const Titlt = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
        {props.text}
    </Text>
  )
}

export default Titlt
