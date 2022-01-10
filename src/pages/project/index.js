import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Title from "../../components/title";
import {portfolioList} from "../../utils/portfolio.js";
import {Black, White} from "../../components/color";
import Modal from "../../components/modal";

function Project(props) {
  const [showModal, setShowModal] = useState(false);
  const [imgSelected, setImgSelected] = useState("");

  const onKeyDown = (e) => {
    if (e.keyCode === 27) {
      setShowModal(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <Holder id="project">
      <Title text="Project" top="2%" left="5%" />
      <Container>
        {
          portfolioList.map((d) => (
            <Item
              key={d.id}
              onClick={() => {
                setShowModal(true);
                setImgSelected(d.img);
              }}
            >
              <img
                src={d.img}
                alt={""}
              />
              <h3>{d.title}</h3>
            </Item>
          ))
        }
      </Container>
      <Modal
        show={showModal}
        img={imgSelected}
        onClose={() => setShowModal(false)}
        onKeyDown={onKeyDown}
      />
    </Holder>
  );
}

export default Project;

const Holder = styled.div`
  background-color: ${Black};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 7rem;

  @media (max-width: 425px) {
    width: 100%;
    margin-top: 15rem;
  }
`;

const Item = styled.div`
  width: 220px;
  height: 150px;
  border-radius: 20px;
  margin: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${White};
  position: relative;
  transition: all 1s ease;
  cursor: pointer;
  box-shadow: 10px 10px 32px -9px rgba(184, 182, 184, 1);

  @media (max-width: 425px) {
    width: 130px;
    height: 100px;
  }

  h3 {
    position: absolute;
    font-size: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  &:hover {
    background-color: #112a2a2a;
    border: 1px solid ${White};
    transform: scale(1.1);

    img {
      opacity: 0.2;
      z-index: 0;
    }
  }
`;
