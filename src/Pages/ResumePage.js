// import Button from "../Components/Buttons/Button";
import React from "react";
import Title from "../Components/Title";
import styled from "styled-components";
import SkillSection from "../Components/SkillSection";
import progressBars from "../data/progressBars";
import osSkills from "../data/osSkills";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Button from "../Components/Buttons/Button";
import ResumeCertificate from "../Components/ResumeCertificates";

function ResumePage() {
  return (
    <ResumePageStyled>
      <Helmet>
        <title>Amrindra | Resume</title>
        <meta name="description" content="Portfolio" />
      </Helmet>

      <Title tittle="Resume" span="Resume" />
      <div className="resume">
        <div className="resume-head-wrapper">
          <div className="resume-title">
            <h1>Amrindra Ouk</h1>
            <p>
              Very enthusiastic about technology and learning new things with a
              background in Computer Science and Engineering. Taking online
              courses to build my strengths in programming languages and IT
              skills. Experienced as a trainer, manufacturing practices, and
              various duties with a background in medical devices.
            </p>
          </div>

          <hr />

          <div className="resume-objective">
            <h1>
              <i className="fas fa-bullseye"></i> Objective
            </h1>

            <p>
              Seeking an opportunity to work as an entry-level developer or
              anything in a field in which my tech skills are required.
            </p>
          </div>
        </div>

        <hr />

        <div className="resume-body-section">
          <div className="resume-left">
            <div className="work-experience">
              <Fade left>
                <h1>
                  <i className="fas fa-briefcase" /> Work Experience
                  <div className="underline"></div>
                </h1>

                <div className="job-title">
                  <h3>
                    {" "}
                    <img
                      src="https://img.icons8.com/emoji/48/000000/diamond-with-a-dot-emoji.png"
                      alt=""
                    />
                    {"  "}
                    <em>TRAINING ASSOCIATE II | ABIOMED Inc 2017-Present</em>
                  </h3>
                </div>

                <sub style={{ color: "white" }}>
                  22 Cherry Hill Dr, Danvers, MA 01923, Phone: (978) 646-1400
                </sub>

                <p>
                  • Responsible for training operators on the requirements of
                  the assembly process <br />• Work as a Continuous Improvement
                  Lead and participate in Kaizen Events, 5S system <br />•
                  Experienced in creating Job Instruction Breakdown (JIB) <br />
                  • Participate in critical quality initiatives to include
                  capability, quality, and improve overall process capability{" "}
                  <br />• Assist in establishing, implementing, and maintaining
                  the quality management and training system <br />• Works
                  towards improvements for process efficiencies <br />• Familiar
                  with S4 Hana SAP, and Camstar System <br />
                  • Proficiency in Soldering PCB Components and Molding under
                  Microscope <br />• Collaborating Closely with the Engineering
                  Team to Support the Building Process <br />• Expertise with
                  Electrical Test Equipment, such as Leakage Current,
                  Resistance, Multimeters, and Caliper Depth Test <br />•
                  Supporting engineer in the Analytical Lab
                </p>
              </Fade>
            </div>

            <div className="eduction">
              <Fade left>
                <h1>
                  <i className="fas fa-user-graduate" /> Education
                  <div className="underline"></div>
                </h1>
                <h3>Royal University of Phnom Penh, Cambodia, 2010-2013</h3>
                <h3 className="diploma-title">
                  Associate in <b>Computer Science</b> and <b>Engineering</b>
                </h3>

                <em className="edu-em">
                  {" "}
                  (The Royal University of Phnom Penh is an accredited
                  institution in U.S. terms. It offers a four-year Bachelor of
                  Science degree in Computer Science and Engineering that is
                  equivalent to the corresponding U.S degree. According to CED -
                  Center for Educational Documentation, Inc in Boston.)
                </em>
              </Fade>
            </div>

            <div className="pro-certificates">
              <Fade left>
                <h1>
                  <i className="fas fa-certificate" /> Professional Certificates
                  <div className="underline"></div>
                </h1>
                <ResumeCertificate />
              </Fade>
            </div>
          </div>

          <div className="resume-right">
            <Fade right>
              <div className="tech-skills">
                <h1>
                  <i className="fas fa-laptop-code" /> My Tech Skills
                  <div className="underline"></div>
                </h1>
                {progressBars.map((item, index) => {
                  return (
                    <SkillSection
                      className="programming"
                      key={index}
                      icon={item.icon}
                      progress={item.progress}
                      width={item.width}
                      skill={item.skill}
                    />
                  );
                })}
              </div>

              <div className="os-skills">
                <h1>
                  <i className="fas fa-laptop" /> OS Skills
                  <div className="underline"></div>
                </h1>

                {osSkills.map((item, index) => {
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
        </div>

        <a
          href="https://drive.google.com/file/d/10gTwyGGUFpEOX0iNc5ppAsIs2AyId-q1/view?usp=sharings"
          className="download-button"
          target="_blank"
          rel="noreferrer"
        >
          <Button title="Download Resume" />
        </a>
      </div>
    </ResumePageStyled>
  );
}

const ResumePageStyled = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  .job-title {
    img {
      height: 20px;
      width: 20px;
    }
  }

  .resume {
    background-color: #0a1d37;
    padding-bottom: 4rem;
    border-radius: 1rem;

    .resume-title > p,
    .resume-objective > p {
      padding: 1.2rem 2rem;
    }

    .resume-objective {
      padding-bottom: 25px;
    }

    h1 {
      font-size: 2rem;
      font-weight: 400;
      padding-top: 1rem;
      text-transform: uppercase;
      color: white;
    }

    h3 {
      padding-top: 1rem;
      color: white;
    }

    p {
      padding-top: 1rem;
      font-size: 1.1rem;
      line-height: 35px;
      color: white;
    }

    .diploma-title {
      margin-bottom: 0.7rem;
    }

    .resume-head-wrapper {
      margin: 1rem 0 1rem 0;
      text-align: center;
    }

    .resume-body-section {
      display: flex;
      gap: 1rem;

      .resume-left {
        background-color: #3c4f65;
        padding: 0 25px;
        border-radius: 0 15px 15px 0;
        flex: 2;
      }

      .edu-em {
        color: #f0ece3;
      }

      .resume-right {
        background-color: #404b69;
        padding: 0 25px;
        border-radius: 15px 0 0 15px;
        flex: 1;
      }
      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 27rem));
        gap: 1rem;
        justify-content: space-around;

        .resume-left,
        .resume-right {
          border-radius: 15px;
        }
      }
    }
  }

  .download-button {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    button {
      color: white;
      border: 2px solid white;
      &:hover {
        background-color: grey;
      }
    }
  }
  /* .resume-body-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(0, 28rem));
      gap: 1rem;
      justify-content: space-around;
      text-align: start;

      @media (max-width: 1400px) {
        grid-template-columns: repeat(auto-fit, minmax(5rem, 19rem));
        gap: 1rem;
        justify-content: space-around;
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(0, 27rem));
        gap: 1rem;
        justify-content: space-around;
      }
    } */
`;

export default ResumePage;
