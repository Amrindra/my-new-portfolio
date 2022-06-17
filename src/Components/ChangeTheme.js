import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context";

function ChangeTheme() {
  // const [btnIcon, setBtnIcon] = useState(false);
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
    // setBtnIcon(!btnIcon);
  };

  return (
    <ChangeThemeStyled>
      {" "}
      <div className="toggle" onClick={handleClick}>
        {/* <img src={btnIcon ? Sun : Moon} alt="sun icon" className="toggle-icon"/> */}
        <img
          src="https://img.icons8.com/emoji/48/000000/sun-emoji.png"
          alt="sun icon"
          className="toggle-icon"
        />

        <img
          src="https://img.icons8.com/external-tulpahn-flat-tulpahn/48/000000/external-moon-sun-and-moon-tulpahn-flat-tulpahn-4.png"
          alt="moon icon"
          className="toggle-icon"
        />

        <div
          className="toggle-button"
          // onClick={handleClick}
          style={{
            left: theme.state.darkMode ? 0 : 25,
            backgroundColor: theme.state.darkMode ? "white" : "#222",
          }}
        ></div>
      </div>
    </ChangeThemeStyled>
  );
}

const ChangeThemeStyled = styled.div`
  display: flex;

  .toggle {
    width: 50px;
    height: 25px;
    border-radius: 20px;
    border: 1px solid #fff;
    /* background-color: white; */
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    .toggle-icon {
      width: 15px;
      height: 15px;
    }

    .toggle-button {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      /* background-color: #93b5c6; */
      position: absolute;
      cursor: pointer;

      /* &:hover {
        box-shadow: 0 25px 25px red;
      } */
    }
  }
`;

export default ChangeTheme;
