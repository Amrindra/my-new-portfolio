import React, { useContext } from "react";
import Title from "../Components/Title";
import styled from "styled-components";
import profilePicture from "../images/profilePicture.png";
import Fade from "react-reveal/Fade";
import progressBars from "../data/progressBars";
import SkillSection from "../Components/SkillSection";
import Zoom from "react-reveal/Zoom";
import { Helmet } from "react-helmet";

import { ThemeContext } from "../context";

function AboutPage() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <AboutPageStyled>
      <Helmet>
        <title>Amrindra | About Me</title>
        <meta name="description" content="Portfolio" />
      </Helmet>

      <Title tittle={"About Me"} span={"About Me"} />

      <div className="imageSection">
        <div className="image">
          <Zoom>
            <img src={profilePicture} alt="" />
          </Zoom>
        </div>
        <div className="about-info">
          <h4>
            I am{" "}
            <span style={{ color: darkMode ? "#EC255A" : "#4b5a63" }}>
              Amrindra Ouk,
            </span>
          </h4>
          <Fade right>
            <p className="paragraph" style={{ color: darkMode && "white" }}>
              a respectful, diligent individual who gets along well with
              colleagues and is always ready to lend a helping hand. I can adapt
              to my surroundings and execute any project given to me. I have a
              background in{" "}
              <em>
                <strong>Computer Science</strong>
              </em>{" "}
              with a passion for writing clean code and building mobile-friendly
              websites. I thrive in an environment that allows me to use my
              programming skills to solve problems. Some of my hobbies include
              reading articles/blogs and keeping up to date with new
              technologies.
            </p>
            {/* I enjoy building everything from small to scalable web apps. */}
          </Fade>
        </div>
      </div>

      <div>
        <Fade bottom>
          <Title tittle={"My Tech Skills"} span={"My Tech Skills"} />

          {/* **********Progress Bars Section************ */}
          <div className="skills-container">
            {progressBars.map((item, index) => {
              return (
                <SkillSection
                  key={index}
                  icon={item.icon}
                  progress={item.progress}
                  width={item.width}
                  skill={item.skill}
                />
              );
            })}
          </div>
        </Fade>
      </div>

      {/* <DownArrow /> */}
    </AboutPageStyled>
  );
}

const AboutPageStyled = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  /* padding-bottom: 1rem; */

  .imageSection {
    display: flex;
    font-size: 1rem;
    margin-top: 3rem;
    margin-bottom: 4rem;

    img {
      width: 250px;
      border-radius: 0.9rem;
    }

    .about-info {
      margin-left: 2rem;

      h4 {
        font-size: 3rem;
      }

      .paragraph {
        font-size: 1.1rem;
        /* padding-top: 5px; */
        font-weight: 400;
        color: #888;
        line-height: 1.7;
        /* font-family: "Open Sans Condensed", sans-serif; */
        /* font-size: 1.5rem; */
        /* background-color: #fff;
        box-shadow: 0 9px 15px rgba(0, 0, 0, 0.8);
        padding: 2rem;
        border-radius: 16px;
        margin-top: 2rem; */
      }
    }
  }

  .skills-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 1rem;
    padding-bottom: 30px;
    /* padding: 0 20px; */
  }

  @media (max-width: 678px) {
    .imageSection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .about-info {
        margin-left: 0;

        h4 {
          text-align: center;
          font-size: 2rem;
        }
      }

      .paragraph {
        text-align: center;
      }
    }

    .skills-container {
      display: flex;
      flex-direction: column;
      /* grid-template-columns: repeat(1, 1fr); */
      /* padding: auto; */
      margin-right: 1rem;
    }
  }

  .navLink_button {
    display: flex;
    justify-content: center;
  }
`;

export default AboutPage;
