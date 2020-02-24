import React, { FC, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import { lookup as requestLookup } from "../../utils/fortnite";
import { AccountsContext, accountsDefault } from "./index";

const AccountsProvider: FC<{ usernames: string[] }> = ({
  children,
  usernames
}) => {
  const [accounts, setAccounts] = useState<AccountsContext>(accountsDefault);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    const { cancel, request } = requestLookup(usernames);
    request
      .then(
        users =>
          setAccounts(
            users.map((user: { account_id: string }, userIndex: number) => ({
              username: usernames[userIndex],
              ...user
            }))
          ),
        console.error
      )
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
    <AccountsContext.Provider value={accounts}>
      {children}
    </AccountsContext.Provider>
  );
};

export default AccountsProvider;
