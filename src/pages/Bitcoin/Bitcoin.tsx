import React from "react";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import {
  Chart,
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
        <ParentSize debounceTime={10}>
          {({ width: visWidth, height: visHeight }) => (
            <Chart width={visWidth} height={visHeight} />
          )}
        </ParentSize>
      </ChartContainer>
    </Container>
  );
}
