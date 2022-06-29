import React from "react";
import Title from "../Components/Title";
import certificateData from "../data/certificateData";
import Card from "../Components/Card";
import styled from "styled-components";
import Roll from "react-reveal/Roll";
import { Helmet } from "react-helmet";

function CertificatePage() {
  return (
    <CertificateStyled>
      <Helmet>
        <title>Amrindra | Certificates</title>
        <meta name="description" content="Portfolio" />
      </Helmet>

      <Title
        tittle={"Professional Certs"}
        span={"Professional Certs"}
        className=""
      />
      <div className="certicates-wrapper">
        <Roll left>
          {certificateData.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              link={item.link}
              title={item.title}
              desc={item.desc}
              button={item.button}
            />
          ))}
        </Roll>
      </div>
    </CertificateStyled>
  );
}

const CertificateStyled = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  padding-bottom: 2.5rem;

  .certicates-wrapper {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 20rem));
    gap: 3rem 2.5rem;
    justify-content: center;

    //This card-btn is from Card component className
    .card-btn {
      width: 45%;
      margin-top: 15px;
    }

    @media screen and (max-width: 1500px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem 2rem;
    }

    @media screen and (max-width: 830px) {
      grid-template-columns: repeat(auto-fit, minmax(12rem, 20rem));
    }
  }

  /* @media screen and (max-width: 684px) {
    .certicates-wrapper {
      
    }
  } */
`;

export default CertificatePage;
