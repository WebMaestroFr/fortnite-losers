import React, { FC } from "react";
import { Card } from "react-bootstrap";
import ChallengeItem from "./Item";

const ChallengesWeek: FC<ChallengeWeek> = ({ challenges, image, name }) => (
  <Card className="ChallengesWeek">
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      {challenges.map((challenge, key) => (
        <ChallengeItem key={key} {...challenge} />
      ))}
    </Card.Body>
  </Card>
);

export default ChallengesWeek;
