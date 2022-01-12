import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context";
// import img from "../images/avatar.jpg";

function Title({ tittle, span }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <TitleStyled>
      <h3>
        {tittle}
        <span className="span-name" style={{ color: darkMode && "white" }}>
          {span}
        </span>
      </h3>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  color: white;
  position: relative;
  padding-bottom: 1rem;
  letter-spacing: 3px;

  .span-name {
    position: absolute;
    top: 15%;
    left: 0;
    font-size: 3rem;
    opacity: 0.4;
    color: hsl(229, 61%, 25%);

    @media (max-width: 675px) {
      font-size: 2.5rem;
    }
  }

  /* h3,
  span {
    font-family: "Shalimar", cursive;
  } */

  /* @media (max-width: 675px) {
    h3 {
      text-align: center;
    }
  } */

  /* ::before::after to creat underline below About me */
  /* &::before {
    content: "";
    background-color: #0381ff38;
    width: 6rem;
    height: 0.3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 50px;
  }

  &::after {
    content: "";
    background-color: #037fff;
    width: 3rem;
    height: 0.3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 50px;
  } */
`;

export default Title;
