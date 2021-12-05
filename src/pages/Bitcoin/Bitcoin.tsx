import React, { useEffect, useState } from "react";

import { withScreenSize } from "@visx/responsive";
import { Chart } from "@components";

export function RawBitcoin() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div>
      <Chart
        data={data}
        parentWidth={10000 * 0.6}
        parentHeight={10000 * 0.45}
        margin={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
}
const Bitcoin = withScreenSize(RawBitcoin);
export { Bitcoin };
