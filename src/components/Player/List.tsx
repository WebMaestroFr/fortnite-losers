import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import FlipMove from "react-flip-move";

import useNavigation from "../../context/navigation";
import usePlayers from "../../context/players";
import PlayerCard from "./Card";

const PlayersList: FC = () => {
  const players = usePlayers();
  const { category } = useNavigation();
  return (
    <Row as={FlipMove} className="PlayersList">
      {players
        .sort(
          (a, b) =>
            b.global_stats[category].winrate - a.global_stats[category].winrate
        )
        .map(player => (
          <Col key={player.name} md={6} lg={4}>
            <PlayerCard {...player} />
          </Col>
        ))}
    </Row>
  );
};

export default PlayersList;
