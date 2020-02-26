import React, { FC } from "react";
import { Card, ProgressBar } from "react-bootstrap";

import useNavigation from "../../context/navigation";
import ChartPlaceTop from "../Chart/PlaceTop";
import PlayerStats from "./Stats";

const PlayerCard: FC<Player> = ({ account, global_stats, name }) => {
  const { category } = useNavigation();
  const stats = global_stats[category];
  return (
    <Card className="PlayerCard">
      <Card.Body>
        <Card.Title as="h2">{name}</Card.Title>
        <h3 className="ChartPlaceTop-level">
          Level <span>{account.level}</span>
        </h3>
        <ProgressBar now={account.progress_pct} />
        <ChartPlaceTop id={name} stats={stats} />
        <PlayerStats stats={stats} />
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
