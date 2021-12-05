import { Tooltip } from "@visx/tooltip";

interface Props {
  yTop: number;
  yLeft: number;
  yLabel: string;
  xTop: number;
  xLeft: number;
  xLabel: string;
}

export function ToolTip(props: Props) {
  return (
    <div>
      <Tooltip
        top={props.xTop}
        left={props.xLeft}
        style={{
          transform: "translateX(-50%)",
        }}
      >
        {props.xLabel}
      </Tooltip>
      <Tooltip
        top={props.yTop}
        left={props.yLeft}
        style={{
          backgroundColor: "rgba(92, 119, 235, 1.000)",
          color: "white",
        }}
      >
        {props.yLabel}
      </Tooltip>
    </div>
  );
}
