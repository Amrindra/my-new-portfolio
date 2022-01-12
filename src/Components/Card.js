import React from "react";
import styled from "styled-components";

function Card({ img, link, title, desc, button, demo, siteLink }) {
  return (
    <CardStyled>
      <div className="card">
        <div className="card-browser">
          <div className="card-circle"></div>
          <div className="card-circle"></div>
          <div className="card-circle"></div>
        </div>

        <div className="card-body">
          <a href={link} className="card-img" target="_blank" rel="noreferrer">
            <img src={img} alt="" className="card-img"></img>
          </a>

          <a href={siteLink} target="_blank" rel="noreferrer">
            <h2 className="card-title">{title}</h2>
          </a>

          <p className="card-description">{desc}</p>

          <div className="see-demo">
            <a href={siteLink} target="_blank" rel="noreferrer">
              <h3>{demo}</h3>
            </a>
          </div>

          <div className="btn-wrapper">
            <a href={link} target="_blank" rel="noreferrer">
              <button className="card-btn">{button}</button>
            </a>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  .card {
    overflow: hidden;
    box-shadow: 0 5px 10px white;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* cursor: pointer; */
    transition: transform 200ms ease-in;
    background-color: white;

    h2 {
      font-size: 1.5rem;
    }

    .card-img {
      height: 14rem;
      width: 100%;
      object-fit: cover;
      transition: all 2s ease;

      /* &:hover {
        transform: scale(1);
      } */
    }

    .card-title {
      padding: 1rem;
      text-align: center;
      color: #334756;
    }

    .card-description {
      padding: 0 1rem;
      color: #334756;
      text-align: center;
    }

    /* BUTTON SECTION */

    .btn-wrapper {
      text-align: center;
    }

    .card-btn {
      padding: 0.15rem;
      width: 50%;
      font-family: inherit;
      font-weight: bold;
      font-size: 1rem;
      margin: 1rem 2rem;
      border: 2px solid grey;
      border-radius: 1rem;
      background: transparent;
      color: grey;
      /* transition: background 700ms ease-in, color 700ms ease in; */
      cursor: pointer;
      transition: 700ms;
    }

    &:hover {
      transform: scale(1.04);
      transition: 700ms;
    }

    &:hover .card-btn {
      background: #000;
      color: white;
    }

    .card-browser {
      height: 20px;
      background-color: rgb(245, 245, 245);
      /* background-color: grey; */
      display: flex;
      align-items: center;
      position: sticky;
      /* z-index: -1; */

      .card-circle {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        margin: 3px;
        background-color: black;
      }
    }
  }
`;

export default Card;
