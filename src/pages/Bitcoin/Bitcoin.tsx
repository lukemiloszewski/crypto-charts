import React, { useEffect, useState } from "react";

import { withScreenSize } from "@visx/responsive";
import {
  Chart,
  Container,
  NavBar,
  Paragraph,
  TextContainer,
} from "@components";

export function RawBitcoin() {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       setData(json);
  //     });
  // }, []);

  return (
    <Container>
      <TextContainer>
        <NavBar></NavBar>
        <Paragraph color={"white"} isBold={true}>
          Bitcoin: 30-Day Historical Price
        </Paragraph>
      </TextContainer>
      <Chart width={1000} height={500} />;
    </Container>
  );
}
const Bitcoin = withScreenSize(RawBitcoin);
export { Bitcoin };
