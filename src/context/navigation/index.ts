import { createContext, useContext } from "react";

export const navigationDefault = {
  category: "solo",
  tab: "stats"
} as NavigationContext;

export const NavigationContext = createContext<NavigationContext>(
  navigationDefault
);

export default () => useContext(NavigationContext);
