import React from "react";
import styled from "styled-components";

function DownArrow() {
  return (
    <DownArrowStyled>
      <img
        src="https://img.icons8.com/fluency/48/000000/expand-arrow.png"
        alt=""
        className="arrow-img"
      ></img>
    </DownArrowStyled>
  );
}

const DownArrowStyled = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin: 30px 0;
    height: 50px;
    overflow-x: hidden;
    animation: animateDown infinite 1.2s;

    @keyframes animateDown {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(5px);
      }
      60% {
        transform: translateY(3px);
      }
    }
  }
`;
export default DownArrow;
