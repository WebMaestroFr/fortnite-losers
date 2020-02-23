import React, { FC } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

import { formatStatColor, formatStatTitle } from "../../utils/format";

const ChartPlaceTop: FC<{
  id: string;
  stats: PlayerStatsDuo | PlayerStatsSolo | PlayerStatsSquad;
}> = ({ id, stats }) => {
  const statsEntries = Object.entries(stats);
  const topStats = statsEntries
    .filter(([name, value]) => name.startsWith("placetop") && value)
    .map(([name, value]) => ({
      fill: formatStatColor(name),
      name: formatStatTitle(name),
      value
    }));
  const chartData = [
    ...topStats,
    {
      fill: formatStatColor("matchesplayed"),
      value: topStats.reduce(
        (rest, { value }) => rest - value,
        stats.matchesplayed
      )
    }
  ].reverse();
  const renderLabel = ({ name }: { name?: string }) =>
    formatStatTitle(name) || "";
  const filterId = `ChartPlaceTop-shadow-${id}`;

  return (
    <ResponsiveContainer aspect={1} className="ChartPlaceTop">
      <PieChart width={512} height={512}>
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
        <Pie
          animationBegin={0}
          animationDuration={800}
          dataKey="value"
          data={chartData}
          endAngle={450}
          innerRadius="33%"
          isAnimationActive={true}
          label={renderLabel}
          labelLine={false}
          outerRadius="67%"
          startAngle={90}
          stroke="none"
          style={{ filter: `url(#${filterId})` }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ChartPlaceTop;
