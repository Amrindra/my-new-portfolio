import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context";

function Button({ title }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <ButtonStyled>
      {" "}
      <button
        className="global-button"
        style={{
          color: darkMode && "white",
          border: darkMode && "2px solid white"
        }}
      >
        {title}
      </button>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.div`
  /* margin-top: 3rem; */

  button {
    padding: 0.3rem 1rem;
    /* width: %; */
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem 2rem;
    border: 2px solid grey;
    border-radius: 1rem;
    background: transparent;
    color: grey;
    transition: background 200ms ease-in, color 200ms ease in;
    cursor: pointer;
    transition: 400ms;

    &:hover {
      /* background-color: white; */
      transform: translateY(-8%);
      transition: 400ms;
    }
    /* 
    &::after,
    &::before {
      content: "";
      position: absolute;
      opacity: 0.5;
      background: white;
      border-radius: inherit;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      z-index: -1;
      transition: transform 0.3s ease;
    } */
    /* &:hover {
      transform: translate(-12px, -12px);
    }

    &:hover::after {
      transform: translate(6px, 6px);
    }
    &:hover::before {
      transform: translate(12px, 12px);
    } */
  }
`;

export default Button;
