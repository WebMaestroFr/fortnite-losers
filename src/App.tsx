import React, { FC } from "react";
import { Container } from "react-bootstrap";

import "./App.scss";
import PlayersList from "./components/Player/List";
import CONFIG from "./config/index.json";
import useNavigation from "./context/navigation";
import NavigationProvider from "./context/navigation/Provider";
import PlayersProvider from "./context/players/Provider";

const AppContent: FC = () => {
  const { tab } = useNavigation();
  switch (tab) {
    case "challenges":
      return <>Under construction.</>;
    default:
      return (
        <PlayersProvider usernames={CONFIG.usernames}>
          <PlayersList />
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
