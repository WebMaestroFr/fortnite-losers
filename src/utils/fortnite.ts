import request from "./request";

export const challenges = (season: string = "current") =>
  request({
    params: { season },
    url: "/challenges"
  });

export const lookup = (username: string) =>
  request({
    params: { platform: "psn", username },
    url: "/lookup"
  });

export const stats = (account: string) =>
  request({ params: { account }, url: "/stats" });
