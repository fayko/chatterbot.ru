export function getDocument(callback: () => void): void {
  if (typeof document !== 'undefined') callback();
}

export function GenerateEvent(): void {
  const event = new Event('open_popup');
  document.dispatchEvent(event);
  // }
}

export function getScreenWidth(): number {
  let x, y;
  x = document.getElementById('root').getBoundingClientRect();
  y = document.getElementById('root').clientWidth;
  return y;
}
