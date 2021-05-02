export type HighlightState = 'increment' | 'decrement' | '';

export const getHighlight = (prevValue:number, nextValue: number): HighlightState => {
  if (prevValue < nextValue) {
    return 'increment'
  } else if (prevValue > nextValue) {
    return 'decrement'
  }
  return ''
}