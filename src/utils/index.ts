export const byAmount = (type = "string") => (a: any, b: any) => {
  // Sort array alphabetically, and reversed numerically
  switch (type) {
    case "string":
      return a.localeCompare(b);
    case "date":
      return new Date(b).getTime() - new Date(a).getTime();
    case "array":
      return (b && b.length) - (a && a.length);
    default:
      return b - a;
  }
};
