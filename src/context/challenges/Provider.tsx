import React, { FC, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import { challenges as requestChallenges } from "../../utils/fortnite";
import { ChallengesContext, challengesDefault } from "./index";

const ChallengesProvider: FC<{ usernames: string[] }> = ({
  children,
  usernames
}) => {
  const [challenges, setChallenges] = useState<ChallengesContext>(
    challengesDefault
  );
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    const { cancel, request } = requestChallenges();
    request
      .then(c => {
        setChallenges(c);
        console.warn(c);
      }, console.error)
      .finally(() => setLoading(false));
    return cancel;
  }, [usernames]);
  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="light">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <ChallengesContext.Provider value={challenges}>
      {children}
      <pre style={{ color: "white" }}>
        {JSON.stringify(challenges, null, 2)}
      </pre>
    </ChallengesContext.Provider>
  );
};

export default ChallengesProvider;
