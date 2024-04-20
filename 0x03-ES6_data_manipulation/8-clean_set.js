export default function cleanSet(set, startString) {
  if (!set || !startString || !startString instanceof String) return '';
  return [...set].filter((x) => x && x.startsWith(startString)).map((x) => x.slice(startString.length)).join('-');
}
