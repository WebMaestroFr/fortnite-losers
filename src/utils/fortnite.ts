import request from "./request";

export const challenges = (season: string = "current") =>
  request({
    params: { season },
    url: "/challenges"
  });

export const lookup = (usernames: string[], platform: string = "psn") =>
  request(
    usernames.map(username => ({
      params: { platform, username },
      url: "/lookup"
    }))
  );

export const stats = (accountIds: string[]) =>
  request(accountIds.map(account => ({ params: { account }, url: "/stats" })));

// const getRandomInt = (min: number, max: number) =>
//   Math.round(min + Math.random() * (max - min));
//
// const getRandomStats = () => {
//   const placetop1 = getRandomInt(0, 32);
//   const placetop3 = getRandomInt(placetop1, placetop1 * 3);
//   const placetop5 = getRandomInt(placetop3, (placetop3 * 5) / 3);
//   const placetop6 = getRandomInt(placetop5, (placetop5 * 6) / 5);
//   const placetop10 = getRandomInt(placetop6, (placetop6 * 10) / 6);
//   const placetop12 = getRandomInt(placetop10, (placetop10 * 12) / 10);
//   const placetop25 = getRandomInt(placetop12, (placetop12 * 25) / 12);
//   const minMatchesPlayed =
//     placetop1 +
//     placetop3 +
//     placetop5 +
//     placetop6 +
//     placetop10 +
//     placetop12 +
//     placetop25;
//   const matchesplayed = getRandomInt(minMatchesPlayed, minMatchesPlayed * 3);
//   const kd = (1 - Math.random()) * 2;
//   return {
//     kd,
//     kills: Math.floor(matchesplayed * kd),
//     matchesplayed,
//     minutesplayed: matchesplayed * getRandomInt(10, 15),
//     placetop1,
//     placetop10,
//     placetop12,
//     placetop25,
//     placetop3,
//     placetop5,
//     placetop6,
//     playersoutlived: getRandomInt(placetop25, placetop25 * 3),
//     score: getRandomInt(8, 256),
//     winrate: placetop1 / matchesplayed
//   };
// };
//
// export const stats = (account: string) => {
//   const r = request({ params: { account }, url: "/stats" });
//   return {
//     cancel: r.cancel,
//     request: r.request.then(() => ({
//       account: {
//         level: getRandomInt(8, 256),
//         progress_pct: Math.random() * 100
//       },
//       global_stats: {
//         duo: getRandomStats(),
//         solo: getRandomStats(),
//         squad: getRandomStats()
//       }
//     }))
//   };
// };
