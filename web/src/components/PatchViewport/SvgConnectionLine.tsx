import { Position } from '../../types/types.ts';
import { createConnectionLinePoints } from '../../utils/createConnectionLinePoints.ts';

type Props = {
  from: Position;
  to: Position;
};

export function SvgConnectionLine({ from, to }: Props) {
  const points = createConnectionLinePoints({ from, to });
  const pathString = points.reduce((acc, point, index) => {
    const prefix = index === 0 ? 'M' : 'L';
    return `${acc} ${prefix} ${point.x} ${point.y}`;
  }, '');

  return (
    <path
      d={pathString}
      stroke={'white'}
      strokeWidth="3"
      fill="none"
      strokeLinejoin={'round'}
      markerEnd="url(#head)"
    />
  );
}
