export function formatCounterValue(value) {
  return Math.abs(value).toString().padStart(4, '0');
}
