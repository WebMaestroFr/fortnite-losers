type AccountsContext = { account_id: string; username: string }[];

type ChallengesContext = { weeks: { [w: string]: ChallengeWeek } };

type NavigationContext = {
  category: "duo" | "solo" | "squad";
  tab: "stats" | "challenges";
};

type PlayersContext = Player[];
