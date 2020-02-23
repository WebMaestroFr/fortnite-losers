import React, { FC, useEffect, useState } from "react";

import { stats } from "../../utils/fortnite";
import useAccounts from "../accounts";
import AccountsProvider from "../accounts/Provider";
import { PlayersContext, playersDefault } from "./index";

export const PlayersProvider: FC = ({ children }) => {
  const [players, setPlayers] = useState<PlayersContext>(playersDefault);
  const accounts = useAccounts();
  useEffect(() => {
    const { cancel, request } = stats(
      accounts.map(({ account_id }) => account_id)
    );
    request.then(p => setPlayers(p), console.error);
    return cancel;
  }, [accounts]);
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
