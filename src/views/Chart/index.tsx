import React, { memo, useCallback, useState } from "react";
import { ParseResult } from "papaparse";
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
  CartesianAxis,
} from "recharts";

import { data } from "utils/formatter";
import { Container } from "./styles";

interface Props {
  data: data[];
}

const Chart = ({ data }: Props) => {
  return (
    <Container>
      <ResponsiveContainer height={500} width="90%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis
            dataKey="weight"
            allowDecimals
            allowDuplicatedCategory={false}
            tickCount={10}
            unit=" kg"
          />
          <XAxis
            dataKey="time"
            allowDecimals={false}
            allowDuplicatedCategory={false}
            tickCount={10}
          />
          <Area
            dataKey="weight"
            stroke="#350101"
            fill="#242d534b"
            name="Strength (Kg)"
          />
          <Legend />
          <Tooltip cursor={{ stroke: "blue", strokeWidth: 2 }} />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default memo(Chart);
