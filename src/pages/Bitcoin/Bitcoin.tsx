import React, { useEffect, useState } from "react";

import { withScreenSize } from "@visx/responsive";
import { Chart, Container } from "@components";

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
      <Chart width={1000} height={500} />;
    </Container>
  );
}
const Bitcoin = withScreenSize(RawBitcoin);
export { Bitcoin };
