import { memo } from "react";
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

type Props = {
  data: data[] | undefined;
};

const Chart = ({ data }: Props) => {
  if (!data) {
    return <div />;
  }

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
