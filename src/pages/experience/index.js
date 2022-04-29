import React from "react";
import styled from "styled-components";
import Title from "../../components/title";
import SkillBar from "../../components/skillBar";
import {BgColor, White, Red, Green, Purple, Black} from "../../components/color";

function Experience(props) {
  return (
    <Holder id="experience">
      <Title text="Experience & Skill" top="2%" left="5%" />
      <HolderCard>
        <Header>
          Software Engineer
        </Header>
        <Section>
          Checker Co., Ltd
        </Section>
        <Text>
          April 2014 - current
        </Text>
        <Text>
          Responsible for managing and develop UX/UI and content management systems for education.
        </Text>
      </HolderCard>
      <Line/>
      <HolderSkill>
        <SkillBar text={"HTML"} width={"90%"} color={Red}/>
        <SkillBar text={"CSS"} width={"90%"} color={Purple}/>
        <SkillBar text={"Jquery"} width={"60%"} color={Green}/>
        <SkillBar text={"JavaScript"} width={"70%"} color={Red}/>
        <SkillBar text={"React"} width={"80%"} color={Purple}/>
        <SkillBar text={"React Native"} width={"50%"} color={Green}/>
        <SkillBar text={"Python (Django)"} width={"60%"} color={Red}/>
        <SkillBar text={"Vue.js"} width={"40%"} color={Purple}/>
        <SkillBar text={"Node.js"} width={"40%"} color={Green}/>
      </HolderSkill>
    </Holder>
  );
}

export default Experience;

const Holder = styled.div`
  background-color: ${Black};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const HolderCard = styled.div`
  box-sizing: border-box;
  background: ${BgColor};
  padding: 3rem;
  border: 2px solid ${White};
  width: 30vw;
  height: fit-content;
  margin-top: 7rem;

  @media (max-width: 425px) {
    width: 80%;
    padding: 1.5rem;
    height: fit-content;
    margin-top: 5rem;
  }
`;

const HolderSkill = styled.div`
  box-sizing: border-box;
  padding: 3rem;
  padding-bottom: 1rem;
  width: 30vw;
  height: fit-content;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 425px) {
    width: 80%;
    padding: 0;
    height: fit-content;
    margin-top: 2rem;
  }
`;

const Header = styled.div`
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: ${White};

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

const Section = styled(Header)`
  font-size: 1.6rem;

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

const Text = styled(Header)`
  font-size: 1.2rem;
  margin-bottom: 0;

  @media (max-width: 425px) {
    font-size: 0.7rem;
  }
`;

const Line = styled.div`
  height: 50vh;
  width: 3px;
  background-color: ${White};
  display: block;
  margin-top: 7rem;

  @media (max-width: 425px) {
    display: none;
  }
`;
