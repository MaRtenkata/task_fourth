export function formatUnixTime(unixTime) {
  const date = new Date(unixTime * 1000);
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}
