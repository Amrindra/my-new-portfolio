import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../Components/Buttons/Button";
import { ThemeContext } from "../context";
import Jello from "react-reveal/Jello";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

function HomePage() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // console.log(theme.state.darkMode);

  return (
    <HomePageStyled>
      <Helmet>
        <title>Amrindra | Homepage</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
      <div className="introduction">
        <h1 style={{ color: darkMode ? "white" : "#3f3351" }}>
          Hi, I'm{" "}
          <span style={{ color: darkMode && "red" }} className="my-name">
            Amrindra
          </span>
        </h1>

        <div className="intro-title">
          <div
            className="intro-title-wrapper"
            style={{ color: darkMode ? "white" : "#334756" }}
          >
            <div className="intro-title-item">A Passionate Developer</div>
            <div className="intro-title-item">Problem Solving</div>
            <div className="intro-title-item">Eager to Learn New Things</div>
            <div className="intro-title-item">Honesty & Integrity</div>
            <div className="intro-title-item">Working as a Team</div>
          </div>
        </div>

        <div className="body-text">
          <Fade left>
            <h3>
              I'm a technology enthusiast who loves solving problems with
              programming & designing responsive websites.
            </h3>
          </Fade>
        </div>

        <Jello>
          <div className="icons">
            <a
              href="https://github.com/Amrindra"
              target="_blank"
              rel="noreferrer"
              className="icon i-github"
            >
              <img
                src="https://img.icons8.com/fluency/100/000000/github.png"
                alt=""
              />
            </a>
            <a
              href="mailto: oamrindra@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon i-email"
            >
              <img
                src="https://img.icons8.com/fluency/100/000000/email-open.png"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/amrindra-ouk-0960161a4/"
              target="_blank"
              rel="noreferrer"
              className="icon i-linkedIn"
            >
              <img
                src="https://img.icons8.com/fluency/100/000000/linkedin.png"
                alt=""
              />
            </a>
          </div>
        </Jello>

        <a
          href="https://drive.google.com/file/d/1F2l7pSX9AubkyEP2xEy9wEik84gbJMtS/view?usp=sharing"
          className="download-button"
          target="_blank"
          rel="noreferrer"
        >
          <Button title="Download Resume" />
        </a>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
  text-align: center;
  padding-top: 3rem;

  h1 {
    letter-spacing: 0.3rem;
    /* font-size: 1rem; */
  }

  h3 {
    margin: 70px 0 80px 0;
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .my-name {
    background: linear-gradient(
      90deg,
      rgba(20, 10, 36, 1) -30%,
      rgba(115, 167, 223, 1) 50%,
      rgba(92, 162, 213, 1) 18%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
    background-clip: text;
    font-size: 4.5rem;
  }

  /* icons */
  img {
    width: 60px;
    height: 60px;
    transition: 900ms;

    &:hover {
      transform: scale(1.2);
      transition: 900ms;
    }
  }

  .intro-title {
    height: 50px;
    overflow: hidden;
    margin-top: 1rem;
    /* margin: 20px 0; */

    @media screen and (max-width: 1024px) {
      height: 45px;
      margin-top: 1rem;
    }

    .intro-title-wrapper {
      height: 100%;
      animation: move 9s ease-in-out infinite alternate;

      @keyframes move {
        25% {
          transform: translateY(-50px);
        }
        50% {
          transform: translateY(-100px);
        }
        75% {
          transform: translateY(-150px);
        }
        100% {
          transform: translateY(-200px);
        }
      }

      .intro-title-item {
        height: 50px;
        font-size: 25px;
        font-weight: bold;
      }
    }
  }

  .icon {
    padding: 0 5px;
  }

  .global-button {
    border: none;
    color: white;
    background: linear-gradient(
      90deg,
      rgba(40, 197, 226, 0.8) 0%,
      rgba(154, 183, 249, 0.74) 100%
    );
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 3rem;
    }
  }

  /* ************************ */
  @media screen and (max-width: 768px) {
    h1,
    span {
      /* margin-top: 7rem; */
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.2rem;
      margin: 30px 0 20px 0;
    }

    .body-text {
      margin: 3rem 0;
    }
  }

  /* *************************************** */

  @media screen and (min-width: 768px) {
    h1 {
      /* margin-top: 7rem; */
      font-size: 3.5rem;

      span {
        font-size: 4rem;
      }
    }

    .body-text {
      margin: 2rem 0;

      h3 {
        font-size: 1.5rem;
      }
    }
    /* button {
      font-size: 1.4rem;
    } */
  }

  /* *************************************** */

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

export default HomePage;
