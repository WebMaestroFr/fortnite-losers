import React, { FC, useEffect, useState } from "react";

import { lookup } from "../../utils/fortnite";
import { AccountsContext, accountsDefault } from "./index";

const AccountsProvider: FC<{ usernames: string[] }> = ({
  children,
  usernames
}) => {
  const [accounts, setAccounts] = useState<AccountsContext>(accountsDefault);
  useEffect(() => {
    const { cancel, request } = lookup(usernames);
    request.then(
      users =>
        setAccounts(
          users.map((user: { account_id: string }, userIndex: number) => ({
            username: usernames[userIndex],
            ...user
          }))
        ),
      console.error
    );
    return cancel;
  }, [usernames]);
  return (
    <AccountsContext.Provider value={accounts}>
      {children}
    </AccountsContext.Provider>
  );
};

export default AccountsProvider;
