import request from "./request";

export const lookup = (username: string) =>
  request({ url: "/lookup", params: { username } });

export const stats = (account: string) =>
  request({ url: "/stats", params: { account } });
