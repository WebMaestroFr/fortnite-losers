import React, { FC, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import { stats as requestStats } from "../../utils/fortnite";
import useAccounts from "../accounts";
import AccountsProvider from "../accounts/Provider";
import { PlayersContext, playersDefault } from "./index";

export const PlayersProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [players, setPlayers] = useState<PlayersContext>(playersDefault);
  const accounts = useAccounts();
  useEffect(() => {
    setLoading(true);
    const { cancel, request } = requestStats(
      accounts.map(({ account_id }) => account_id)
    );
    request
      .then(p => setPlayers(p), console.error)
      .finally(() => setLoading(false));
    return cancel;
  }, [accounts]);
  if (loading) {
    return (
      <Spinner
        animation="border"
        className="PlayersProvider-loader"
        role="status"
        variant="light"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <PlayersContext.Provider value={players}>
      {children}
    </PlayersContext.Provider>
  );
};

const PlayersAccountsProvider: FC<{ usernames: string[] }> = ({
  usernames,
  ...props
}) => (
  <AccountsProvider usernames={usernames}>
    <PlayersProvider {...props} />
  </AccountsProvider>
);

export default PlayersAccountsProvider;
