import React, { FC } from "react";
import { Container } from "react-bootstrap";

import "./App.scss";
import ChartKillsPerDeath from "./components/Chart/KillsPerDeath";
import PlayersList from "./components/Player/List";
import CONFIG from "./config/index.json";
import ChallengesProvider from "./context/challenges/Provider";
import useNavigation from "./context/navigation";
import NavigationProvider from "./context/navigation/Provider";
import PlayersProvider from "./context/players/Provider";

const AppContent: FC = () => {
  const { tab } = useNavigation();
  switch (tab) {
    case "challenges":
      return <ChallengesProvider usernames={CONFIG.usernames} />;
    default:
      return (
        <PlayersProvider usernames={CONFIG.usernames}>
          <PlayersList />
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
