export function formatDate(isoString) {
  if (!isoString) return "";

  const [year, month, day] = isoString.split("-").map(Number);
  const date = new Date(year, month - 1, day); // local time, no UTC shift

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
