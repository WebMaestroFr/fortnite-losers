interface PlayerAccount {
  level: number;
  progress_pct: number;
}

interface PlayerStats {
  kd: number;
  kills: number;
  matchesplayed: number;
  minutesplayed: number;
  placetop1: number;
  placetop10: number;
  placetop12: number;
  placetop25: number;
  placetop3: number;
  placetop5: number;
  placetop6: number;
  playersoutlived: number;
  score: number;
  winrate: number;
}

interface PlayerStatsDuo extends PlayerStats {
  placetop1: number;
  placetop5: number;
  placetop12: number;
}

interface PlayerStatsSolo extends PlayerStats {
  placetop1: number;
  placetop10: number;
  placetop25: number;
}

interface PlayerStatsSquad extends PlayerStats {
  placetop1: number;
  placetop3: number;
  placetop6: number;
}

interface PlayerStatsCategories {
  duo?: PlayerStatsDuo;
  solo?: PlayerStatsSolo;
  squad?: PlayerStatsSquad;
}
