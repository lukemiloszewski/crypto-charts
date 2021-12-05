import { Group } from "@visx/group";
import { AreaClosed, LinePath, Bar } from "@visx/shape";
import { withParentSize } from "@visx/responsive";
import { scaleTime, scaleLinear } from "@visx/scale";
import { LinearGradient } from "@visx/gradient";
import { PatternLines } from "@visx/pattern";
import { withTooltip } from "@visx/tooltip";

interface Props {
  data: any;
  parentWidth: any;
  parentHeight: any;
  margin: any;
}

function RawChart(props: Props) {
  if (!props.data.bpi) return <div>loading...</div>;

  const data = Object.keys(props.data.bpi).map((k) => ({
    time: k,
    price: props.data.bpi[k],
  }));

  const width = props.parentWidth - props.margin.left - props.margin.right;
  const height = props.parentHeight - props.margin.top - props.margin.bottom;

  const x = (d: any) => d.time;
  const y = (d: any) => d.price;

  const firstPoint = data[0];
  const currentPoint = data[data.length - 1];
  const minPrice = 4900; //Math.min(data.map(y));
  const maxPrice = 6700; //Math.max(data.map(y));

  const xScale = scaleTime({
    range: [0, width],
    domain: [x(firstPoint), x(currentPoint)],
  });
  const yScale = scaleLinear({
    range: [height, 0],
    domain: [minPrice, maxPrice + 100],
  });

  return (
    <div>
      hhhhhhhhhhhhhhhhhhhhhhh
      {props.data.stringify()}
      <svg width={props.parentWidth} height={props.parentHeight}>
        <LinearGradient
          id="fill"
          from="#6086d6"
          to="#6086d6"
          fromOpacity={0.2}
          toOpacity={0}
        />
        <PatternLines
          id="dLines"
          height={6}
          width={6}
          stroke="#27273f"
          strokeWidth={1}
          orientation={["diagonal"]}
        />
        <Group>
          <AreaClosed
            stroke="transparent"
            data={props.data}
            yScale={yScale}
            // xScale={xScale}
            x={x}
            y={y}
            fill="url(#fill)"
          />
          <AreaClosed
            stroke="transparent"
            data={props.data}
            yScale={yScale}
            // xScale={xScale}
            x={x}
            y={y}
            fill="url(#dLines)"
          />
        </Group>
      </svg>
    </div>
  );
}

let Chart = withTooltip(RawChart);
export { Chart };
