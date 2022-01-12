import styled from "styled-components";
import React from "react";
import Navigation from "./Navigation";

function Sidebar({ toggle, handleClick }) {
  return (
    <SidebarSytled className={`${toggle ? "nav-toggle" : ""}`}>
      <Navigation handleClick={handleClick} />
    </SidebarSytled>
  );
}

const SidebarSytled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  overflow: hidden;
  background-color: #191d2b;
  box-shadow: 0 9px 15px rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 1200px) {
    right: -100%;
  }
`;
export default Sidebar;
