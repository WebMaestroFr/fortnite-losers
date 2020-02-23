import { createContext, useContext } from "react";

export const playersDefault = [] as PlayersContext;

export const PlayersContext = createContext<PlayersContext>(playersDefault);

export default () => useContext(PlayersContext);
