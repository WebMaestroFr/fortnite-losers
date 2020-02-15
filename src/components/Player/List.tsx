import React, { FC, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { lookup } from "../../utils/fortnite";
import PlayerStats from "./Stats";

const PlayerListItem: FC<{ username: string }> = ({ username }) => {
  const [accountId, setAccountId] = useState<string>();
  useEffect(() => {
    const { cancel, request } = lookup(username);
    request.then(({ account_id }) => setAccountId(account_id), console.error);
    return cancel;
  }, [username]);
  return (
    <Col md={6} lg={4}>
      <Card>
        <Card.Body>
          <Card.Title as="h2">{username}</Card.Title>
          {accountId ? (
            <Card.Text className="PlayerListItem-content">
              <PlayerStats accountId={accountId} />
            </Card.Text>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  );
};

const PlayerList: FC<{ usernames: string[] }> = ({ usernames }) => (
  <Row className="PlayerList">
    {usernames.map(username => (
      <PlayerListItem key={username} username={username} />
    ))}
  </Row>
);

export default PlayerList;