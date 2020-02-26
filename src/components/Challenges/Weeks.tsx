import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import FlipMove from "react-flip-move";

import useChallenges from "../../context/challenges";
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

const ChallengesWeeks: FC = () => {
  const { weeks } = useChallenges();
  return (
    <Row as={FlipMove} className="ChallengesWeeks" duration={400}>
      {Object.entries(weeks).map(([key, week]) => (
        <Col key={key} md={6}>
          <ChallengesWeek {...week} />
        </Col>
      ))}
    </Row>
  );
};

export default ChallengesWeeks;
