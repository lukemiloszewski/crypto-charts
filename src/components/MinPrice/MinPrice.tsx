import { LinePath } from "@visx/shape";

interface Props {
  data: any;
  x: any;
  y: any;
  yText: string;
  label: string;
  yScale: any;
  xScale: any;
}

export function MinPrice(props: Props) {
  return (
    <g>
      <LinePath
        data={props.data}
        x={props.x}
        y={props.y}
        stroke="#6086d6"
        strokeWidth={1}
        strokeDasharray="4,4"
        strokeOpacity=".3"
      />
      <text fill="#6086d6" y={props.yText} dy="-.5em" dx="10px" fontSize="12">
        {props.label}
      </text>
    </g>
  );
}
