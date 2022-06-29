import Card from "../Components/Card";
import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import portfolioData from "../data/portfolioData";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";

function ProjectPage() {
  return (
    <PortfolioPageStyled>
      <Helmet>
        <title>Amrindra | My Projects</title>
        <meta name="description" content="Portfolio" />
      </Helmet>

      <Title tittle={"My Projects"} span={"My Projects"} />

      <div className="card-wrapper">
        <Slide right>
          {portfolioData.map((item, index) => (
            <Card
              key={index}
              img={item.img}
              link={item.link}
              title={item.title}
              demo={item.demo}
              siteLink={item.siteLink}
              desc={item.desc}
              button={item.button}
            />
          ))}
        </Slide>
      </div>
    </PortfolioPageStyled>
  );
}

const PortfolioPageStyled = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  padding-bottom: 2.5rem;

  .card-wrapper {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 20rem));
    gap: 2rem 2rem;
    justify-content: center;

    @media screen and (max-width: 1500px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem 2rem;
    }

    @media screen and (max-width: 868px) {
      grid-template-columns: repeat(auto-fit, minmax(12rem, 20rem));
      margin-top: 2rem;
    }
  }

  .see-demo {
    text-align: center;
    color: teal;
    margin: 10px 0 5px 0;
    text-decoration: underline;

    h3 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 684px) {
    .card-wrapper {
    }
  }
`;

export default ProjectPage;
