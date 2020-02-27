import React, { FC } from "react";
import { Container } from "react-bootstrap";

import "./App.scss";
import ChallengesCards from "./components/Challenges";
import ChartKillsPerDeath from "./components/Chart/KillsPerDeath";
import FortniteMap from "./components/Map";
import PlayersCards from "./components/Players";
import CONFIG from "./config/index.json";
import ChallengesProvider from "./context/challenges/Provider";
import useNavigation from "./context/navigation";
import NavigationProvider from "./context/navigation/Provider";
import PlayersProvider from "./context/players/Provider";

const AppContent: FC = () => {
  const { tab } = useNavigation();
  switch (tab) {
    case "challenges":
      return (
        <ChallengesProvider>
          <ChallengesCards />
        </ChallengesProvider>
      );
    case "map":
      return <FortniteMap />;
    default:
      return (
        <PlayersProvider usernames={CONFIG.usernames}>
          <PlayersCards />
          <h2>Kills per Death</h2>
          <ChartKillsPerDeath />
        </PlayersProvider>
      );
  }
};

const App = () => (
  <Container className="App">
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  </Container>
);

export default App;
