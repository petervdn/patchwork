/**
 * Makes sure a value stays between certain bounds.
 *
 * @param value
 * @param min
 * @param max
 */
export function clampValue(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
