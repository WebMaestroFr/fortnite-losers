import React, { FC } from "react";
import { Container } from "react-bootstrap";

import "./App.scss";
import PlayerList from "./components/Player/List";
import useNavigation from "./context/navigation";
import NavigationProvider from "./context/navigation/Provider";

const USERNAMES = [
  "webmaestrofr",
  "lojah01",
  "Maxime_SMN",
  "laplume_bob",
  "Tibsim",
  "Fabinoide",
  "le_grin_che",
  "RaskarKapak"
];

const AppContent: FC = () => {
  const { tab } = useNavigation();
  switch (tab) {
    case "challenges":
      return <>Challenges</>;
    default:
      return <PlayerList usernames={USERNAMES} />;
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
