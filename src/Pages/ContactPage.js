import styled from "styled-components";
import React, { useContext, useState, useRef } from "react";
import Title from "../Components/Title";
import { ThemeContext } from "../context";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

function ContactPage() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        `service_qtw4evm`,

        "template_buudr87",

        formRef.current,
        `user_${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactStyled>
      <Helmet>
        <title>Amrindra | Contact Me</title>
        <meta name="description" content="Portfolio" />
      </Helmet>

      <div className="container">
        <Title tittle={"Contact Me"} span={"contact Me"} />

        <p style={{ color: darkMode && "white" }}>
          <img
            src="https://img.icons8.com/emoji/100/000000/light-bulb-emoji.png"
            alt=""
            className="light-buld"
          />
          Need a collaboration with your projects? or have any questions? please
          do not hesitate to contact me.
        </p>

        <div className="form-and-map">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              backgroundColor: darkMode && "#222",
            }}
          >
            <Fade top>
              <div className="form-group">
                <label htmlFor="name">
                  Your Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="form-element"
                  // placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Subject">
                  Subject<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  // style={{ backgroundColor: darkMode && "#222" }}
                  type="text"
                  name="user_subject"
                  required
                  className="form-element"
                  // placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  // style={{ backgroundColor: darkMode && "#222" }}
                  type="email"
                  name="user_email"
                  required
                  className="form-element"
                  // placeholder="abc@example.com"
                />
              </div>

              <div className="form-group full">
                <label htmlFor="message">Message </label>
                <textarea
                  // style={{ backgroundColor: darkMode && "#222" }}
                  name="message"
                  row="5"
                  className="form-element"
                  placeholder="Hi there, would you like to get in touch?"
                ></textarea>
              </div>

              <div className="submit-group">
                <button
                  style={{
                    backgroundColor: darkMode && "#D5D5D5",
                    color: darkMode && "#222",
                  }}
                >
                  {done ? (
                    <h3>
                      Sent <br />
                      Thank You!
                    </h3>
                  ) : (
                    "SEND"
                  )}
                </button>
              </div>
            </Fade>
          </form>

          <Fade bottom>
            <div className="map-section">
              <iframe
                className="map"
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46852.14375008893!2d-71.12540336590386!3d42.7828745597994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3022cbba67eef%3A0xb3350b93f7fb0d23!2sHaverhill%2C%20MA!5e0!3m2!1sen!2sus!4v1638899367010!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Fade>
        </div>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.section`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  padding-bottom: 4rem;

  p {
    color: #888;
    line-height: 1.5;
    margin-bottom: 32px;
    padding-top: 40px;
    padding-bottom: 10px;
    /* text-align: start; */
    font-size: 1.5rem;
  }

  .light-buld {
    height: 24px;
    width: 24px;
  }

  .form-and-map {
    display: flex;
    gap: 2rem;

    form {
      flex-grow: 2;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 16px;
      background-color: #fff;
      padding: 32px;
      border-radius: 16px;
      box-shadow: 0 9px 15px rgba(0, 0, 0, 0.8);
      /* background-color: #000; */

      .form-group > label {
        display: block;
        margin-bottom: 5px;
        color: #888;
        font-size: 15px;
      }
      .form-group {
        grid-column: 1 / -1;
      }

      .form-element {
        background-color: #d8e3e7;
        appearance: none;
        outline: none;
        border: none;
        display: block;
        width: 100%;
        border-radius: 8px;
        padding: 12px 16px;
        transition: 0.4s;
        box-shadow: 0 9px 15px rgba(0, 0, 0, 0.1);

        &:focus {
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
          background-color: #fff;
        }
      }

      textarea {
        resize: none;
        min-height: 100px;
      }

      .submit-group {
        /* grid-column: 1 /-1;
        text-align: right; */
        padding-top: 1rem;
      }

      button {
        appearance: none;
        border: none;
        outline: none;
        background-color: none;
        width: 100%;
        padding: 12px 16px;
        background-color: #000;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        transition: 0.4s;
        font-weight: 900;
        font-size: 1.1rem;

        &:hover {
          transform: scale(1.04);
        }
      }
    }

    .map-section {
      flex-grow: 1;

      .map {
        border-radius: 16px;
        box-shadow: 0 9px 15px rgba(0, 0, 0, 0.8);
      }
    }
  }

  @media screen and (max-width: 675px) {
    .form-and-map {
      flex-direction: column;
    }

    p {
      font-size: 1rem;
      padding-top: 10px;
    }

    .map-section {
      height: 70vh;
    }
  }
`;

export default ContactPage;
