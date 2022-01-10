import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Gray } from "../color";

const Holder = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 100;
`;

const Container = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  align-items: center;
  background-color: transparent;
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 15px;
  box-shadow: 10px 10px 32px -9px rgba(184, 182, 184, 1);

  @media (max-width: 992px) {
    width: 100%;
    left: 0;
    right: 0;
    box-shadow: none;
  }
`;

const CloseIcon = styled(MdClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${Gray};
  font-size: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;


const Modal = ({
  show,
  width,
  height,
  img,
  onClose,
  onKeyDown
}) => {
  return (
    <Holder show={show}>
      <Container width={width} height={height} onKeyDown={onKeyDown}>
        <CloseIcon onClick={onClose} />
        <Img src={img}/>
      </Container>
    </Holder>
  );
};

export default Modal;
