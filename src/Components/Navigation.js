import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
// import profilePicture from "../images/profilePicture.png";
import navLinksData from "../data/navLinksData";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Navigation({ handleClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <NavigationStyled>
      <div className="avatar">
        <NavLink to="/about">
          <img src="https://img.icons8.com/stickers/400/000000/a.png" alt="" />
        </NavLink>

        <div className="icons">
          <a
            href="mailto: oamrindra@gmail.com"
            className="icon i-mail"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/Amrindra"
            className="icon i-github"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/amrindra-ouk-0960161a4/"
            className="icon i-linkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {/* ***handleClick funtion here is once you click on navbar it will collapse itself*** */}
      <ul className="nav-items" onClick={handleClick}>
        {navLinksData.map((item, index) => {
          return (
            <li key={index} className={item.className}>
              {/* <NavLink to={item.path} activeclassname={item.activeClassName}>
                {item.title}
              </NavLink> */}
              <NavLink
                to={item.path}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <footer className="footer">
        <p className="foter-name">&copy; Amrindra Ouk {currentYear}</p>

        <p className="footer-sourceCode">
          You are welcome to get my source code
        </p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  /* border-right: 2px solid var(--border-color); */
  /* box-shadow: 0 9px 15px rgba(0, 0, 0, 0.8); */

  .avatar {
    width: 80%;
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 0;
    text-align: center;

    img {
      width: 80%;
      /* height: 80%; */
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;

    .active {
      background-color: red;
      color: white;
    }

    li {
      display: block;
      color: white;
      font-weight: 900;
      padding: 5px 0;

      a {
        display: block;
        padding: 0.4rem;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: white;
          transition: all 0.1s cubic-bezier(0.96, 0.06, 0.03, 0.93);
          z-index: -1;
          transform-origin: right;
        }
      }
      &:hover {
        color: #000000;
        /* background-color: white; */
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    margin-top: 0.4rem;
    color: white;

    .icon {
      border: 2px solid var(--border-color);
      display: flex;
      justify-content: center;
      align-content: center;
      border-radius: 50%;
      padding: 2px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &:not(:last-child) {
        margin-right: 0.4rem;
      }

      &:hover {
        transform: translate(2.5);
        transition: 900ms;
      }
    }
    .i-linkedIn:hover {
      /* background-color: #916BBF; */
      border: 2px solid #113cfc;
      color: #113cfc;
    }
    .i-github:hover {
      /* background-color: #916BBF; */
      border: 2px solid white;
      color: white;
    }
    .i-mail:hover {
      /* background-color: #916BBF; */
      border: 2px solid #fff;
      color: #fff;
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;

    .foter-name {
      padding: 1rem 0 1rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
      color: white;
    }

    .footer-sourceCode {
      text-align: center;
      padding-bottom: 1rem;
      font-size: 0.8rem;
    }
  }
`;

export default Navigation;
