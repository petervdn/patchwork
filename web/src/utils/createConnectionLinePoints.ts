import { Position } from '../types/types.ts';

export function createConnectionLinePoints({
  from,
  to,
}: {
  from: Position;
  to: Position;
}): Array<Position> {
  const points: Array<Position> = [from];

  if (to.x > from.x) {
    // connect from left to right
    const halfwayX = from.x + (to.x - from.x) / 2;
    points.push({ x: halfwayX, y: from.y });
    points.push({ x: halfwayX, y: to.y });
    points.push({ x: to.x, y: to.y });

    return points;
  }

  return [from, to];
}
