interface PlayerAccount {
  level: number;
  progress_pct: number;
}

interface PlayerStats {
  placetop1: number;
  kd: number;
  winrate: number;
  placetop3: number;
  placetop5: number;
  placetop6: number;
  placetop10: number;
  placetop12: number;
  placetop25: number;
  kills: number;
  matchesplayed: number;
  minutesplayed: number;
  score: number;
  playersoutlived: number;
}

interface PlayerStatsCategories {
  duo?: PlayerStats;
  solo?: PlayerStats;
  squad?: PlayerStats;
}
