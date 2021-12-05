import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container, Paragraph, TextContainer } from "@components";

const StyledLink = styled(Link)`
  color: #f2a900;
  font-weight: bold;
`;

export function Bitcoin() {
  return (
    <Container>
      <TextContainer>
        <Paragraph color={"white"} isBold={true}>
          Price Chart
        </Paragraph>
        <Paragraph>
          <StyledLink to="/">What is Bitcoin?</StyledLink>
        </Paragraph>
      </TextContainer>
    </Container>
  );
}
