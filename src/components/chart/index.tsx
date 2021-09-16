import { ParseResult } from "papaparse";
import React, { memo, useCallback, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: any[];
}

const Chart = ({ data }: Props) => {
  const formatData = data.map((value) => {
    return { time_ms: value[0], weight: value[1] };
  });

  const [ticks, setTicks] = useState([
    0,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
  ]);

  const addTicks = useCallback(() => {
    setTicks((current) => [...current, ticks[ticks.length - 1] + 25]);
  }, [ticks]);

  return (
    <>
      <button onClick={addTicks}>ADD TICK</button>
      <ResponsiveContainer height={400} width="100%">
        <AreaChart data={formatData.slice(1, -1)}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis
            dataKey="time_ms"
            ticks={[60000]}
            label="Time (ms)"
            tickSize={10}
          />
          <YAxis dataKey="weight" ticks={ticks} tickSize={15} />
          <Area
            dataKey="weight"
            stroke="#662a2a"
            fill="#242d53"
            name="Strength (Kg)"
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default memo(Chart);
