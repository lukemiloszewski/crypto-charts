import { Line } from "@visx/shape";
import { Point } from "@visx/point";

interface Props {
  from: Point;
  to: Point;
  tooltipLeft: string | number;
  tooltipTop: string | number;
}

export function HoverLine(props: Props) {
  return (
    <g>
      <Line
        from={props.from}
        to={props.to}
        stroke="white"
        strokeWidth={1}
        style={{ pointerEvents: "none" }}
        strokeDasharray="2,2"
      />
      <circle
        cx={props.tooltipLeft}
        cy={props.tooltipTop}
        r={8}
        fill="#00f1a1"
        fillOpacity={0.2}
        style={{ pointerEvents: "none" }}
      />
      <circle
        cx={props.tooltipLeft}
        cy={props.tooltipTop}
        r={4}
        fill="#00f1a1"
        fillOpacity={0.8}
        style={{ pointerEvents: "none" }}
      />
    </g>
  );
}
