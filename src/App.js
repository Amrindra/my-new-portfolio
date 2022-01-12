import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ProjectPage from "./Pages/ProjectPage";
import CertificatePage from "./Pages/CertificatePage";
import ContactPage from "./Pages/ContactPage";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import { useState, useContext, useEffect } from "react";
import ChangeTheme from "./Components/ChangeTheme";
import { ThemeContext } from "./context";
import AllSections from "./Pages/AllSections";
import { useLocation } from "react-router";
// import { Link } from "react-router-dom";

// this ScrollToTop function is used to set the padge to the top
function ScrollToTop(props) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
}

export default function App() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="app"
      style={{
        // backgroundColor: darkMode ? "#222" : "#EEEEEE",
        backgroundColor: darkMode && "#191919",
        color: darkMode && "white"
      }}
    >
      <ChangeTheme />

      {/* ****Passing State as a prop***** */}
      <Sidebar toggle={toggle} handleClick={handleClick} />

      <MainContentStyled>
        <div className="toggle-icon" onClick={handleClick}>
          {toggle ? (
            // <CloseIcon className="icon x-icon" />
            <img
              src="https://img.icons8.com/fluency/48/000000/delete-sign.png"
              alt=""
              className="icon x-icon"
            />
          ) : (
            // <MenuIcon className="icon menu-icon" />
            <img
              src="https://img.icons8.com/fluency/100/000000/circled-menu.png"
              alt=""
              className="icon menu-icon"
            />
          )}
        </div>

        <ScrollToTop>
          <Routes>
            <Route path="/" element={<AllSections />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="project" element={<ProjectPage />} />
            <Route path="certificate" element={<CertificatePage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </ScrollToTop>
        {/* 
        <Link to="/" className="back-homepage-button">
          <button>back to home page</button>
        </Link> */}
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  padding: 3rem 5rem;

  .toggle-icon {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    margin-left: 0;
    padding: 2rem 1.5rem;

    .toggle-icon {
      display: block;
      /* position: absolute; */
      position: fixed;
      top: 0;
      right: 0;

      cursor: pointer;
      z-index: 1;
      transform: translate(-80%, 120%);

      .icon {
        width: 30px;
        height: 30px;
      }
    }

    .x-icon {
      color: red;
    }
  }
`;
