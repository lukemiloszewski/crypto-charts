import React from "react";
import styled, { keyframes } from "styled-components";

import logo from "@assets/logo.svg";

const StyledApp = styled.div`
  text-align: center;
`;
const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Image = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
`;
const Paragraph = styled.p`
  /* ... */
`;
const Link = styled.a`
  color: #61dafb;
  text-decoration: none;
  padding-bottom: 0.5rem;
  border-bottom: solid 0.25rem;
  border-color: #61dafb;
`;

export function App() {
  return (
    <StyledApp>
      <Header>
        <Image src={logo} alt="logo" />
        <Paragraph>Nothing Has Changed!</Paragraph>
        <Link
          href="https://github.com/lukemiloszewski"
          rel="noopener noreferrer"
        >
          by luke miloszewski
        </Link>
      </Header>
    </StyledApp>
  );
}
