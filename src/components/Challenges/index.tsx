import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import FlipMove from "react-flip-move";

import useChallenges from "../../context/challenges";
import ChallengesWeek from "./Week";

const ChallengesCards: FC = () => {
  const { weeks } = useChallenges();
  return (
    <Row as={FlipMove} className="ChallengesCards" duration={400}>
      {Object.entries(weeks).map(([key, week]) => (
        <Col key={key} md={6}>
          <ChallengesWeek {...week} />
        </Col>
      ))}
    </Row>
  );
};

export default ChallengesCards;
