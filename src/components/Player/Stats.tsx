import React, { FC, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

import { formatStatTitle } from "../../utils/format";
import { stats } from "../../utils/fortnite";

const PlayerStats: FC<{ accountId: string }> = ({ accountId }) => {
  const [playerAccount, setPlayerAccount] = useState<PlayerAccount>();
  const [playerStatsCategories, setPlayerStatsCategories] = useState<
    PlayerStatsCategories
  >();
  const [selectedCategory, setSelectedCategory] = useState<
    "duo" | "solo" | "squad"
  >("solo");

  useEffect(() => {
    const { cancel, request } = stats(accountId);
    request.then(({ account, global_stats }) => {
      setPlayerAccount(account);
      setPlayerStatsCategories(global_stats);
    }, console.error);
    return cancel;
  }, [accountId]);

  const selectedStats =
    playerStatsCategories &&
    playerStatsCategories[selectedCategory] &&
    Object.entries(
      playerStatsCategories[selectedCategory] as PlayerStats
    ).filter(
      ([name]) =>
        !["placetop3", "placetop5", "placetop6", "placetop12"].includes(name)
    );

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
      {selectedStats ? (
        <div className="PlayerStats-content">
          {selectedStats.map(([name, value], index) => (
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
