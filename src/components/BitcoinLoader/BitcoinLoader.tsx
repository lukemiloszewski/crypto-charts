import React, { useState } from "react";

import { Chart } from "@components";
import { ParentSize } from "@visx/responsive";

interface jsonResponseProps {
  bpi: { [dateString: string]: number };
  disclaimer: string;
  time: {
    updated: string;
    updatedISO: string;
  };
}

interface BitcoinData {
  time: string;
  price: number;
}

export function BitcoinLoader() {
  const [data, setData] = useState({} as jsonResponseProps);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.coindesk.com/v1/bpi/historical/close.json`
      );
      setData(await response.json());
    }

    fetchData();
  }, []);

  if (!data?.bpi) {
    return <div>...</div>;
  }

  const bitcoinData = Object.keys(data.bpi).map((k) => ({
    time: k,
    price: data.bpi![k],
  })) as BitcoinData[];

  return (
    <ParentSize debounceTime={10}>
      {({ width: visWidth, height: visHeight }) => (
        <Chart width={visWidth} height={visHeight} bitcoinData={bitcoinData} />
      )}
    </ParentSize>
  );
}
