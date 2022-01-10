import React from "react";
import styled from "styled-components";
import ParticlesBg from 'particles-bg'
import { FaChevronDown } from "react-icons/fa";
import {Black, White} from "../../components/color";

function Intro(props) {
  return (
    <Holder id="intro">
      <ParticlesBg
        num={5}
        type="polygon"
        bg={{
          position: "absolute",
          zIndex: 0,
        }}
      />
      <HolderIntro>
        <H2>Hello, I'm </H2>
        <H1>Prapada Somboonruengsri</H1>
        <H3>Software Engineer</H3>
        <a href="#about">
          <IconDown />
        </a>
      </HolderIntro>
    </Holder>
  );
}

export default Intro;

const Holder = styled.div`
  background-color: ${Black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${White};
  width: 100%;
  height: 100%;

  .particles-bg-canvas-self{
    background: transparent;
  }
`;

const HolderIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: calc(1.5rem + 1vw);
  margin: 20px 0px;
`;

const H2 = styled.h2`
  font-size: 35px;
`;

const H3 = styled.h3`
  font-size: 30px;
`;

const IconDown = styled(FaChevronDown)`
  position: absolute;
  bottom: 10px;
  font-size: 40px;
  color: #fff;
`;
