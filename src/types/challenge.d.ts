interface ChallengeWeek {
  week: string;
  name: string;
  color: string;
  image: string;
  rewards: {
    normal: [];
  };
  challenges: Challenge[];
}

interface Challenge {
  title: string;
  stars: number;
  xp: number;
  progress_total: number;
  party_assist: boolean;
  quest_id: string;
  sub_challenge: null;
  reward: null;
  prestige: boolean;
}
