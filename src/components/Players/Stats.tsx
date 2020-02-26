import React, { FC } from "react";

import { formatStatTitle } from "../../utils/format";

const PlayerStats: FC<{
  stats: PlayerStatsDuo | PlayerStatsSolo | PlayerStatsSquad;
}> = ({ stats }) => (
  <div className="PlayerStats">
    {Object.keys(stats)
      .sort()
      .map(key =>
        (stats as any)[key] ? (
          <div className="PlayerStats-stat" key={key}>
            <span className="PlayerStats-stat-name">
              {formatStatTitle(key)}
            </span>
            <span className="PlayerStats-stat-value">
              {(stats as any)[key]}
            </span>
          </div>
        ) : null
      )}
  </div>
);

export default PlayerStats;
