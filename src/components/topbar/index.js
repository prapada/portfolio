import React from "react";
import styled from "styled-components";
import {IoPersonSharp, IoMail} from "react-icons/io5";
import {Black, White} from "../color";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <Holder className={(menuOpen && "active")}>
      <Wrapper>
        <Left>
          <a href="#intro" className="logo">Intro</a>
          <ItemContainer>
            <Person/>
            <span>+66 91 727 9683</span>
          </ItemContainer>
          <ItemContainer>
            <Mail/>
            <span>ying.prapada@gmail.com</span>
          </ItemContainer>
        </Left>
        <Right>
          <Hamburger className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </Hamburger>
        </Right>
      </Wrapper>
    </Holder>
  );
}

export default Topbar;

const Holder = styled.div`
  width: 100%;
  height: 70px;
  max-height: 70px;
  background-color: ${White};
  position: fixed;
  top: 0;
  z-index: 99;
  transition: all 1s ease;

  &.active {
    background-color: #000033;
    color: ${White};

    .hamburger {
      span {
        &:first-child {
          background-color: ${White};
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          background-color: ${White};
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 40px;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`

`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 425px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 32px;
  height: 25px;

  span {
    width: 100%;
    height: 3px;
    background-color: ${Black};
    transform-origin: left;
    transition: all 2s ease;
  }
`;

const Person = styled(IoPersonSharp)`
  margin-right: 10px;
`;

const Mail = styled(IoMail)`
  margin-right: 10px;
`;
