import React, { useEffect, useState } from "react";

import { withScreenSize } from "@visx/responsive";
import {
  Chart,
  ChartContainer,
  Container,
  NavBar,
  Paragraph,
  TextContainer,
} from "@components";
import { WithScreenSizeProps } from "@visx/responsive/lib/enhancers/withScreenSize";

interface Props {
  screenWidth: number;
  screenHeight: number;
}

export function Bitcoin() {
  // const width = props.screenWidth;
  // const height = props.screenHeight;
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
      <ChartContainer>
        <Chart width={1000} height={500} />;
      </ChartContainer>
    </Container>
  );
}
// let Bitcoin = withScreenSize(RawBitcoin);
// export { Bitcoin };
