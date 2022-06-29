import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import CertificatePage from "./CertificatePage";
import DownArrow from "../Components/DownArrow";
import { Helmet } from "react-helmet";
import Button from "../Components/Buttons/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

function AllSections() {
  return (
    <AllSectionsStyled>
      <HomePage />
      <DownArrow />
      <AboutPage />
      <DownArrow />
      <ProjectPage />
      <DownArrow />
      <CertificatePage />
      <DownArrow />
      <ContactPage />

      <Link to="/resume" className="resume-button">
        <Button title="Check out my online resume" />
      </Link>

      <Helmet>
        <title>Amrindra | Homepage</title>
        <meta name="description" content="Amrindra Ouk personel's portfolio." />
      </Helmet>
    </AllSectionsStyled>
  );
}

const AllSectionsStyled = styled.div`
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;

  .resume-button {
    text-align: center;

    .global-button {
      border-radius: 6px;
      border: 2px solid #30475e;
      color: #30475e;

      /* ANIMATION SECTION */
      animation-name: jiggle;
      animation-duration: 4s;
      animation-timing-function: ease-in;
      animation-iteration-count: infinite;

      @keyframes jiggle {
        48%,
        62% {
          transform: scale(1.2, 1.2);
        }
        50% {
          transform: scale(1.1, 0.9);
        }
        56% {
          transform: scale(0.9, 1.1) translate(0, -5px);
        }
        59% {
          transform: scale(1, 1.1) translate(0, -3px);
        }
      }

      &:hover {
        animation-play-state: paused;
      }
    }
  }
`;

export default AllSections;
