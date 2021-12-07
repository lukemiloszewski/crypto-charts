import React, { useMemo, useCallback } from "react";
import { AreaClosed, Line, Bar, LinePath } from "@visx/shape";
import { curveMonotoneX } from "@visx/curve";
import { scaleTime, scaleLinear } from "@visx/scale";
import { PatternLines } from "@visx/pattern";
import {
  withTooltip,
  Tooltip,
  TooltipWithBounds,
  defaultStyles,
} from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { localPoint } from "@visx/event";
import { LinearGradient } from "@visx/gradient";
import { max, extent, bisector } from "d3-array";
import { timeFormat } from "d3-time-format";

import jsonResponse from "../../utils/data";
interface jsonResponseProps {
  bpi: { [dateString: string]: number };
  disclaimer: string;
  time: {
    updated: string;
    updatedISO: string;
  };
}
let response: jsonResponseProps = jsonResponse;

const bitcoinData = Object.keys(response.bpi).map((k) => ({
  time: k,
  price: response.bpi[k],
}));

interface BitcoinData {
  time: string;
  price: number;
}

type TooltipData = BitcoinData;

export const accentColor = "#f2a900";

const formatDate = timeFormat("%b %d, '%y");
const getDate = (d: BitcoinData) => new Date(d.time);
const getPrice = (d: BitcoinData) => d.price;
const bisectDate = bisector<BitcoinData, Date>((d) => new Date(d.time)).left;

interface AreaProps {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

function RawChart({
  width,
  height,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  showTooltip,
  hideTooltip,
  tooltipData,
  tooltipTop = 0,
  tooltipLeft = 0,
}: AreaProps & WithTooltipProvidedProps<TooltipData>) {
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [margin.left, innerWidth + margin.left],
        domain: extent(bitcoinData, getDate) as [Date, Date],
      }),
    [innerWidth, margin.left]
  );
  const priceScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight + margin.top, margin.top],
        domain: [0, (max(bitcoinData, getPrice) || 0) + innerHeight / 3],
        nice: true,
      }),
    [margin.top, innerHeight]
  );

  // tooltip handler
  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      const { x } = localPoint(event) || { x: 0 };
      const x0 = dateScale.invert(x);
      const index = bisectDate(bitcoinData, x0, 1);
      const d0 = bitcoinData[index - 1];
      const d1 = bitcoinData[index];
      let d = d0;
      if (d1 && getDate(d1)) {
        d =
          x0.valueOf() - getDate(d0).valueOf() >
          getDate(d1).valueOf() - x0.valueOf()
            ? d1
            : d0;
      }
      showTooltip({
        tooltipData: d,
        tooltipLeft: x,
        tooltipTop: priceScale(getPrice(d)),
      });
    },
    [showTooltip, priceScale, dateScale]
  );

  return (
    <>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="#111" rx={14} />
        <LinearGradient
          id="background-gradient"
          from={accentColor}
          to={accentColor}
          toOpacity={0.1}
        />
        <PatternLines
          id="diagonal-lines"
          height={6}
          width={6}
          stroke="#27273f"
          strokeWidth={1}
          orientation={["diagonal"]}
        />
        <AreaClosed<BitcoinData>
          data={bitcoinData}
          x={(d) => dateScale(getDate(d)) ?? 0}
          y={(d) => priceScale(getPrice(d)) ?? 0}
          yScale={priceScale}
          strokeWidth={1}
          stroke="url(#background-gradient)"
          fill="url(#background-gradient)"
          curve={curveMonotoneX}
        />
        <AreaClosed<BitcoinData>
          data={bitcoinData}
          x={(d) => dateScale(getDate(d)) ?? 0}
          y={(d) => priceScale(getPrice(d)) ?? 0}
          yScale={priceScale}
          strokeWidth={1}
          stroke="url(#diagonal-lines)"
          fill="url(#diagonal-lines)"
          curve={curveMonotoneX}
        />
        <LinePath
          data={bitcoinData}
          x={(d) => dateScale(getDate(d)) ?? 0}
          y={(d) => priceScale(getPrice(d)) ?? 0}
          stroke={accentColor}
          strokeOpacity="0.8"
          strokeWidth={2.5}
        />
        <Bar
          x={margin.left}
          y={margin.top}
          width={innerWidth}
          height={innerHeight}
          fill="transparent"
          rx={14}
          onTouchStart={handleTooltip}
          onTouchMove={handleTooltip}
          onMouseMove={handleTooltip}
          onMouseLeave={() => hideTooltip()}
        />
        {tooltipData && (
          <g>
            <Line
              from={{ x: tooltipLeft, y: margin.top }}
              to={{ x: tooltipLeft, y: innerHeight + margin.top }}
              stroke={accentColor}
              strokeWidth={2}
              pointerEvents="none"
              strokeDasharray="5,2"
            />
            <circle
              cx={tooltipLeft}
              cy={tooltipTop + 1}
              r={4}
              fill="black"
              fillOpacity={0.1}
              stroke="black"
              strokeOpacity={0.1}
              strokeWidth={2}
              pointerEvents="none"
            />
            <circle
              cx={tooltipLeft}
              cy={tooltipTop}
              r={4}
              fill={accentColor}
              stroke="white"
              strokeWidth={2}
              pointerEvents="none"
            />
          </g>
        )}
      </svg>
      {tooltipData && (
        <div>
          <TooltipWithBounds
            key={Math.random()}
            top={tooltipTop - 12}
            left={tooltipLeft + 12}
            style={{
              ...defaultStyles,
            }}
          >
            {`$${getPrice(tooltipData)}`}
          </TooltipWithBounds>
          <Tooltip
            top={innerHeight + margin.top - 14}
            left={tooltipLeft}
            style={{
              ...defaultStyles,
              minWidth: 72,
              textAlign: "center",
              transform: "translateX(-50%)",
            }}
          >
            {formatDate(getDate(tooltipData))}
          </Tooltip>
        </div>
      )}
    </>
  );
}

let Chart = withTooltip<AreaProps, TooltipData>(RawChart);
export { Chart };
