import React from 'react';
import styled from 'styled-components';
import {White, Red} from "../color";

const Title = styled.div`
  font-size: 1.2rem;
  margin: 10px 0px;
  color: ${White};

  @media (max-width: 425px) {
    font-size: 0.7rem;
  }
`;

const Input = styled.input`
  font-size: 1.2rem;
  width: 100%;
  width: -webkit-fill-available;
  padding: 6px 10px;
  height: 38px;
  text-align: left;
  background-color: #383536;
  margin-bottom: 5px;
  border: ${props => (props.status === 'error' ? `1px solid ${Red}` : `1px solid ${White}`)};
  color: ${White};

  &:focus {
    outline: none;
    background-color: transparent;
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
    padding: 0px 10px;
  }
`;

const AreaField = styled.textarea`
  font-size: 1.2rem;
  width: 100%;
  width: -webkit-fill-available;
  padding: 6px 10px;
  text-align: left;
  background-color: #383536;
  border: none;
  margin-bottom: 5px;
  resize: none;
  height: 98px;
  border: ${props => (props.status === 'error' ? `1px solid ${Red}` : `1px solid ${White}`)};
  color: ${White};

  &:focus {
    outline: none;
    background-color: transparent;
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
  }
`;

function InputField(props) {
  if (props.multiline){
    return (
      <div>
        <Title>{props.title}</Title>
        <AreaField
          name={props.name}
          value={props.value}
        />
      </div>
    );
  }
  return (
    <div>
      <Title>{props.title}</Title>
      <Input
        type={props.type}
        name={props.name}
        value={props.value}
      />
    </div>
  );
}

export default InputField;
