import { createContext, useContext } from "react";

export const challengesDefault = { weeks: {} } as ChallengesContext;

export const ChallengesContext = createContext<ChallengesContext>(
  challengesDefault
);

export default () => useContext(ChallengesContext);
