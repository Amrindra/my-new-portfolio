import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../context";

function SkillSection({ skill, progress, width, icon }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <SkillSectionStyled>
      {/* ****Progress Bars***** */}
      <div className="skills-wrapper">
        <div className="icon-percentage">
          <img src={icon} alt="" className="skill-title"></img>
          {/* <h3 className="skill-text">{progress}</h3> */}
        </div>

        <div className="skill-bar">
          <div className="skill-progress">
            <div className="progress"></div>
            <div
              className="inner-progress"
              style={{
                width,
                background: darkMode && "#1687A7",
              }}
            >
              <h3 className="skills">{skill}</h3>
            </div>
          </div>
        </div>
      </div>
    </SkillSectionStyled>
  );
}

const SkillSectionStyled = styled.div`
  margin: 0.4rem 0;

  .skills-wrapper {
    /* height: 100vh; */

    .skill-title {
      width: 45px;
      height: 45px;
      /* margin-left: 10px; */
    }

    .icon-percentage {
      display: flex;
      align-items: center;
      margin-left: 10px;
      justify-content: space-between;
    }

    h3 {
      font-size: 1.5rem;
    }

    .skill-bar {
      display: flex;
      align-items: center;

      .skill-progress {
        width: 100%;
        height: 1.37rem;
        background-color: #0381ff3f;
        position: relative;
        margin-left: 1rem;
        border-radius: 20px;

        .inner-progress {
          position: absolute;

          /* background-color: #037fff; */
          background: linear-gradient(
            135deg,
            rgba(9, 49, 235, 0.83) 0%,
            rgba(154, 183, 249, 0.74) 100%
          );

          height: 100%;
          bottom: 0;
          left: 0;
          color: white;
          border-radius: 20px;

          .skills {
            padding: 0 6px;
            font-weight: 900;
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

export default SkillSection;
