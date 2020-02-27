declare module "react-map-interaction";

type AccountsContext = { account_id: string; username: string }[];

type ChallengesContext = { weeks: { [w: string]: ChallengeWeek } };

type NavigationContext = {
  category: "duo" | "solo" | "squad";
  tab: "challenges" | "stats" | "map";
};

type PlayersContext = Player[];
