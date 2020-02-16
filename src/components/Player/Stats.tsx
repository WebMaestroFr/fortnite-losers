import React, { FC, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

import useNavigation from "../../context/navigation";
import { formatStatColor, formatStatTitle } from "../../utils/format";
import { stats } from "../../utils/fortnite";

const PlayerStats: FC<{
  accountId: string;
}> = ({ accountId }) => {
  const [playerAccount, setPlayerAccount] = useState<PlayerAccount>();
  const [playerStatsCategories, setPlayerStatsCategories] = useState<
    PlayerStatsCategories
  >();

  const { category } = useNavigation();

  useEffect(() => {
    const { cancel, request } = stats(accountId);
    request.then(({ account, global_stats }) => {
      setPlayerAccount(account);
      setPlayerStatsCategories(global_stats);
    }, console.error);
    return cancel;
  }, [accountId]);

  const selectedStats =
    playerStatsCategories && (playerStatsCategories[category] as PlayerStats);

  const selectedStatsEntries = selectedStats && Object.entries(selectedStats);

  const topStats =
    selectedStats &&
    [
      "placetop1",
      "placetop3",
      "placetop5",
      "placetop6",
      "placetop10",
      "placetop12",
      "placetop25"
    ].map(name => ({
      fill: formatStatColor(name),
      name: formatStatTitle(name),
      value:
        selectedStats[
          name as
            | "placetop1"
            | "placetop3"
            | "placetop5"
            | "placetop6"
            | "placetop10"
            | "placetop12"
            | "placetop25"
        ]
    }));
  const restValue =
    selectedStats &&
    topStats &&
    topStats.reduce(
      (rest, { value }) => rest - value,
      selectedStats.matchesplayed
    );
  const chartData = topStats && [
    {
      fill: formatStatColor("matchesplayed"),
      name: formatStatTitle("matchesplayed"),
      value: restValue
    },
    ...topStats
  ];

  return (
    <div className="PlayerStats">
      {playerAccount ? (
        <header className="PlayerStats-header">
          <h3 className="PlayerStats-level">
            Level <span>{playerAccount.level}</span>
          </h3>
          <ProgressBar now={playerAccount.progress_pct} />
        </header>
      ) : null}
      <ResponsiveContainer aspect={1}>
        <PieChart width={512} height={512}>
          <Pie dataKey="value" data={chartData} isAnimationActive={true} />
        </PieChart>
      </ResponsiveContainer>
      {selectedStatsEntries ? (
        <div className="PlayerStats-content">
          {selectedStatsEntries.map(([name, value], index) => (
            <div className="PlayerStats-stat" key={index}>
              <span className="PlayerStats-stat-name">
                {formatStatTitle(name)}
              </span>
              <span className="PlayerStats-stat-value">{value}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PlayerStats;
