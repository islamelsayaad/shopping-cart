export function iconSizeChange(i: number, s: number) {
  return window.screen.width < 768 ? i + "px" : s + "px";
}
