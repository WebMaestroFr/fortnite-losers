import React, { FC } from "react";
import {
  Bar,
  BarChart,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  XAxis
} from "recharts";

import useNavigation from "../../context/navigation";
import usePlayers from "../../context/players";

const ChartKillsPerDeath: FC = () => {
  const { category } = useNavigation();
  const players = usePlayers();
  const chartData = players
    .map(({ global_stats, name }) => ({
      name,
      value: global_stats[category].kd
    }))
    .sort((a, b) => b.value - a.value)
    .map(({ name, value }) => ({
      name,
      positive: value >= 1,
      value: [Math.min(value, 1), Math.max(value, 1)]
    }));
  const filterId = `ChartKillsPerDeath-shadow`;

  return (
    <ResponsiveContainer aspect={6} className="ChartKillsPerDeath">
      <BarChart data={chartData} width={512} height={512}>
        <defs>
          <filter id={filterId}>
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation={1}
              floodColor="rgba(0, 0, 0, 0.5)"
            />
          </filter>
        </defs>
        <XAxis axisLine={false} dataKey="name" stroke="#fff" tickLine={false} />
        <ReferenceLine y={1} stroke="#fff" />
        <Bar
          animationBegin={0}
          animationDuration={800}
          dataKey="value"
          fill="#ced4da"
          isAnimationActive={true}
          stroke="none"
          style={{ filter: `url(#${filterId})` }}
        >
          {chartData.map(({ name, positive }) => (
            <Cell fill={positive ? "#ffc107" : "#ced4da"} key={name} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartKillsPerDeath;
