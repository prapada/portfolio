import React from "react";
import styled from "styled-components";
import {menuList} from "../../utils/menuList.js";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <Holder className={(menuOpen && "active")}>
      <ul>
        {
          menuList.map((menu) => {
            return (
              <li onClick={() => setMenuOpen(false)}>
                <a href={menu.href}>{menu.page}</a>
              </li>
            )
          })
        }
      </ul>
    </Holder>
  );
}

export default Menu;

const Holder = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #000033;
  position: fixed;
  top: 0;
  right: -300px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  &.active {
    right: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 30px;
    font-weight: 300;
    color: white;
    width: 60%;

    li {
      margin-bottom: 25px;

      a {
        font-size: inherit;
        color: inherit;
        text-decoration: none;
      }

      &:hover {
        font-weight: 500;
      }
    }
  }
`;
