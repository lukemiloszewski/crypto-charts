import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container, Paragraph, TextContainer } from "@components";

const StyledLink = styled(Link)`
  color: #f2a900;
  font-weight: bold;
`;

export function Home() {
  return (
    <Container>
      <TextContainer>
        <Paragraph color={"white"} isBold={true}>
          What is Bitcoin?
        </Paragraph>
        <Paragraph>
          Bitcoin is a decentralised digital currency that does not rely on
          third-party institutions. Bitcoin is built on a peer-to-peer network
          that is used to validate transactions. This network timestamps
          transactions by hashing them into an ongoing chain following a
          proof-of-work mechanism. Through proof-of-work, every transaction
          needs to be hashed and every hash needs to be validated by a majority
          of nodes within the network. If successful, that hash will be appended
          to the longest chain. This provides a consensus mechanism that
          prevents records being ultered by bad actors without a controlling
          stake in the network.
        </Paragraph>
        <Paragraph isItalic={true}>
          "If you don't believe it or don't get it, I don't have the time to try
          to convince you, sorry."
        </Paragraph>
        <Paragraph>
          <StyledLink to="/btc">Price Chart</StyledLink>
        </Paragraph>
      </TextContainer>
    </Container>
  );
}
