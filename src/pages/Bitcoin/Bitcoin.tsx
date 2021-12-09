import React from "react";

import {
  BitcoinLoader,
  ChartContainer,
  Container,
  NavBar,
  Paragraph,
  TextContainer,
} from "@components";

export function Bitcoin() {
  return (
    <Container>
      <TextContainer>
        <NavBar></NavBar>
        <Paragraph color={"white"} isBold={true}>
          Bitcoin: 30-Day Historical Price
        </Paragraph>
      </TextContainer>
      <ChartContainer>
        <BitcoinLoader />
      </ChartContainer>
    </Container>
  );
}
