import React from 'react';
import styled from 'styled-components';

const DefaultStyledButton = styled.button`
  width: 150px;
  font-size: 1.2rem;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 0;
  outline: none;
  padding: 12px 24px;
  line-height: 0.9;
  cursor: pointer;
  background: transparent;
  border: 2px solid #DAA520;
  color: #DAA520;
  position: relative;
  transition: all .4s ease-out;
  transform: translateY(0px);

  opacity: ${(props) => {
    if (props.disabled) {
      return 0.5;
    }
    return 1;
  }};

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #DAA520;
    width: 0%;
    height: 100%;
    transition: all .6s ease-out;
  }
  ${(props) => {
    if (!props.disabled) {
      return `
        &:hover {
          color: white;
        }
        &:hover::before {
          width: 100%;
          transition: all .6s ease-out 0s;
        }

        &:active {
          opacity: 0.8;
          color: #B8860B;
          transform: scale(0.98);
        }
      `;
    }
    return '';
  }}

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

const BaseButton = (props) => <DefaultStyledButton {...props}>{props.title || props.children}</DefaultStyledButton>;


export default BaseButton;
