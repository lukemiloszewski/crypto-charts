import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Container, Paragraph, TextContainer } from "@components";

const StyledLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
`;

export function Home() {
  return (
    <Container>
      <TextContainer>
        <Paragraph>
          <StyledLink
            to="/"
          >
            Home
          </StyledLink>
          &nbsp;
          <StyledLink to="/bitcoin" className="selected">
            Charts
          </StyledLink>
        </Paragraph>
        <Paragraph color={"white"} isBold={true}>
          Bitcoin: A Peer-to-Peer Electronic Cash System
        </Paragraph>
        <Paragraph>
          A purely peer-to-peer version of electronic cash would allow online
          payments to be sent directly from one party to another without going
          through a financial institution. Digital signatures provide part of
          the solution, but the main benefits are lost if a trusted third party
          is still required to prevent double-spending. We propose a solution to
          the double-spending problem using a peer-to-peer network. The network
          timestamps transactions by hashing them into an ongoing chain of
          hash-based proof-of-work, forming a record that cannot be changed
          without redoing the proof-of-work. The longest chain not only serves
          as proof of the sequence of events witnessed, but proof that it came
          from the largest pool of CPU power. As long as a majority of CPU power
          is controlled by nodes that are not cooperating to attack the network,
          they'll generate the longest chain and outpace attackers. The network
          itself requires minimal structure. Messages are broadcast on a best
          effort basis, and nodes can leave and rejoin the network at will,
          accepting the longest proof-of-work chain as proof of what happened
          while they were gone.
        </Paragraph>
        <Paragraph isItalic={true} color={"#f2a900"}>
          Satoshi Nakamoto
        </Paragraph>
      </TextContainer>
    </Container>
  );
}
