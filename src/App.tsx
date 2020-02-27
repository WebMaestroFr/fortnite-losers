import React, { FC } from "react";
import { Container } from "react-bootstrap";

import "./App.scss";
import ChallengesWeeks from "./components/Challenges/Weeks";
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
          <ChallengesWeeks />
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
    <header className="App-header">
      <h1>Fortnite Losers</h1>
    </header>
    <main className="App-main">
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </main>
  </Container>
);

export default App;
