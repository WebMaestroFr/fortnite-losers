export const formatStatColor = (name: string) => {
  switch (name) {
    case "placetop1":
      return "#ffc107";
    case "placetop3":
    case "placetop5":
    case "placetop10":
      return "#007bff";
    case "placetop6":
    case "placetop12":
    case "placetop25":
      return "#28a745";
    default:
      return "#ccc";
  }
};

export const formatStatTitle = (name?: string) => {
  switch (name) {
    case "placetop1":
      return "Top 1";
    case "kd":
      return "Kills per Death";
    case "winrate":
      return "Win Rate";
    case "placetop3":
      return "Top 3";
    case "placetop5":
      return "Top 5";
    case "placetop6":
      return "Top 6";
    case "placetop10":
      return "Top 10";
    case "placetop12":
      return "Top 12";
    case "placetop25":
      return "Top 25";
    case "kills":
      return "Kills";
    case "matchesplayed":
      return "Matches Played";
    case "minutesplayed":
      return "Minutes Played";
    case "score":
      return "Score";
    case "playersoutlived":
      return "Players Outlived";
    default:
      return name;
  }
};
