import React from "react";
import styled, {keyframes} from "styled-components";
import me from "../../assets/images/me.png";
import Title from "../../components/title";
import {BgColor, Black, White} from "../../components/color";
import BaseButton from "../../components/button";

function About(props) {
  return (
    <Holder id="about">
      <Title text="ABOUT" top="2%" left="5%" />
      <Box>
        <Main>
          I'm a front-end developer with 4+ years of experience in education tech company. I love to create simple yet beautiful websites with great user experience.
          <br /> <br/>
          My skills might be limited, but my desire to learn new things and develop professionally are endless. I'm interested in the whole frontend stack Like trying new things and building great projects.
          <br/> <br/>
          Flexible within the working environment and able to adapt quickly and positively to challenging situations. I am a quick learner and a good team member.
        </Main>
        <HolderButton>
          <a
            rel={"noreferrer"}
            href={"./resume-2021.pdf"}
            style={{ "text-decoration": "none" }}
            download
            target={'_blank'}
          >
            <BaseButton title={"Resume"}/>
          </a>
        </HolderButton>
      </Box>
      <BoxImg>
        <Img src={me}/>
      </BoxImg>
    </Holder>
  );
}

export default About;

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

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  background: ${BgColor};
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgb(23, 32, 90);
  border: 2px solid #2a3cad;
  color: ${White};
  width: 50vw;
  height: 70vh;
  position: relative;
  left: calc(5rem + 5vw);
  animation: ${opacity} 3s linear;
  margin-top: 7rem;

  @media (max-width: 425px) {
    left: 0;
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
`;

const Main =  styled.div`
  color: ${White};
  padding: 2rem;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.3rem + 1vw);
  backdrop-filter: blur(4px);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  padding-bottom: 0;

  @media (max-width: 425px) {
    font-size: calc(0.3rem + 2vw);
  }
`;

const BoxImg = styled.div`
  background: ${BgColor};
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 20px 50px rgb(23, 32, 90);
  border: 2px solid #2a3cad;
  color: ${White};
  width: 30vw;
  height: 70vh;
  right: calc(5rem + 5vw);
  margin-left: 2rem;
  position: relative;
  margin-top: 7rem;

  @media (max-width: 425px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: 0 0;
`;

const HolderButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
`;
