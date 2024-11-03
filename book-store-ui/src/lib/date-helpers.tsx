export const formatDate = (isoDate: string) => {
  if (!isoDate) return "Invalid date";

  const date = new Date(isoDate);

  if (isNaN(date.getTime())) return "Invalid date";

  return date.toISOString().split("T")[0].split("-").reverse().join(".");
};
