import React from "react";
import { Container } from "react-bootstrap";

import "./App.scss";
import PlayerList from "./components/Player/List";

const USERNAMES = [
  "webmaestrofr",
  "lojah01",
  "Maxime_SMN",
  "RaskarKapak",
  "laplume_bob",
  "Tibsim",
  "Fabinoide"
];

const App = () => (
  <Container className="App">
    <header className="App-header">
      <h1>Fortnite Losers</h1>
    </header>
    <main className="App-main">
      <PlayerList usernames={USERNAMES} />
    </main>
  </Container>
);

export default App;
