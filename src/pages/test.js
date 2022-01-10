import React from "react";
import styled, {keyframes} from "styled-components";
import me from "../../assets/images/me.png";
import Title from "../../components/title";
import {BgColor, Black, White} from "../../components/color";

function About(props) {
  return (
    <Holder id="about">
      <Box>
        <span/>
        <span/>
        <Main>
          I'm a front-end developer with 4+ years of experience in education tech company. I love to create simple yet beautiful websites with great user experience.
          <br /> <br/>
          My skills might be limited, but my desire to learn new things and develop professionally are endless. I'm interested in the whole frontend stack Like trying new things and building great projects.
          <br/> <br/>
          Flexible within the working environment and able to adapt quickly and positively to challenging situations. I am a quick learner and a good team member.
        </Main>
      </Box>
      <BoxImg>
        <span/>
        <span/>
        <Img src={me}/>
      </BoxImg>
      <Title text="ABOUT" top="2%" left="5%" />
    </Holder>
  );
}

export default About;

const animate = keyframes`
  0% {
    transform:scaleX(0);
    transform-origin: left;
  }
  50% {
    transform:scaleX(1);
    transform-origin: left;
  }
  50.1% {
    transform:scaleX(1);
    transform-origin: right;
  }
  100% {
    transform:scaleX(0);
    transform-origin: right;
  }
`;

const opacity = keyframes`
  0% {
    opacity: 0;
    transform: translateY(120px)
  }
  100% {
    opacity: 1;
    transform: translateY(0px)
  }
`;


const Holder = styled.div`
  background-color: ${Black};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Box = styled.div`
  background: ${BgColor};
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgb(23, 32, 90);
  border: 2px solid #2a3cad;
  color: ${White};
  width: 50vw;
  height: auto;
  position: relative;
  left: calc(5rem + 5vw);
  animation: ${opacity} 3s linear;
  margin-top: 7rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.1);
    transition: 0.5s;
    pointer-events: none;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: #50dfdb;
      animation: ${animate} 4s linear infinite;
    }
  }

  span:nth-child(1){
    transform:rotate(0deg);
  }

  span:nth-child(2){
    transform:rotate(180deg);
  }
`;

const Main =  styled.div`
  color: ${White};
  padding: 2rem;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.3rem + 1vw);
  backdrop-filter: blur(4px);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

const BoxImg = styled.div`
  background: ${BgColor};
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 20px 50px rgb(23, 32, 90);
  border: 2px solid #2a3cad;
  color: ${White};
  width: 30vw;
  height: 60vh;
  right: calc(5rem + 5vw);
  margin-left: 2rem;
  margin-top: 7rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.1);
    transition: 0.5s;
    pointer-events: none;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: #50dfdb;
      animation: ${animate} 4s linear infinite;
    }
  }

  span:nth-child(1){
    transform:rotate(0deg);
  }

  span:nth-child(2){
    transform:rotate(180deg);
  }
`;


const Img = styled.img`
  width: 100%;
  height: auto
`;
