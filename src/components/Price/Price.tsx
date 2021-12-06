import {Chart} from "@components";
import formatPrice from "@utils/formatPrice";

interface Props {
  data: any; // TODO: requires further typing
  width: number;
  height: number;
}

export function Price(props: Props) {
  if (!props.data.bpi) return <div>loading...</div>;

  const prices = Object.keys(props.data.bpi).map((k) => ({
    time: k,
    price: props.data.bpi[k],
  }));

  const currentPrice = prices[prices.length - 1].price;
  const firstPrice = prices[0].price;
  const diffPrice = currentPrice - firstPrice;
  const hasIncreased = diffPrice > 0;

  return (
    <div>
      <div>
        <div>
          Bitcoin Price
          <br />
          <small>last 30 days</small>
        </div>
        <div />
        <div>
          <div>{formatPrice(currentPrice)}</div>
          <div>
            {hasIncreased ? "+" : "-"}
            {formatPrice(diffPrice)}
          </div>
        </div>
      </div>
      <div>
        {/* <Chart
          parentWidth={props.width * 0.6}
          parentHeight={props.height * 0.45}
          margin={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 45,
          }}
        /> */}
      </div>
    </div>
  );
}
