import { LinePath } from "@visx/shape";

interface Props {
  data: any;
  x: number;
  y: number;
  yText: number;
  label: number;
}

export function MaxPrice(props: Props) {
  return (
    <g>
      <LinePath
        data={props.data}
        y={props.y}
        x={props.x}
        stroke="#6086d6"
        strokeWidth={1}
        strokeDasharray="4,4"
        strokeOpacity=".3"
      />
      <text fill="#6086d6" y={props.yText} dy="1.3em" dx="10px" fontSize="12">
        {props.label}
      </text>
    </g>
  );
}
