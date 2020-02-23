import { createContext, useContext } from "react";

export const accountsDefault = [] as AccountsContext;

export const AccountsContext = createContext<AccountsContext>(accountsDefault);

export default () => useContext(AccountsContext);
