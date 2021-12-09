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

interface Props {
  [dateString: string]: number;
}

export function BitcoinLoader(props: jsonResponseProps) {
  if (!props.bpi) {
    return <div>HELP...</div>;
  }
  const bitcoinData = Object.keys(props.bpi).map((k) => ({
    time: k,
    price: props.bpi![k],
  })) as BitcoinData[];

  return (
    <ParentSize debounceTime={10}>
      {({ width: visWidth, height: visHeight }) => (
        <Chart width={visWidth} height={visHeight} bitcoinData={bitcoinData} />
      )}
    </ParentSize>
  );
}
