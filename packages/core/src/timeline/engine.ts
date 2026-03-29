export function timeToFrame(ms: number, frameInterval: number) {
  return Math.floor(ms / frameInterval);
}
