import { Position } from '../../types/types.ts';
import { createConnectionLinePoints } from '../../utils/createConnectionLinePoints.ts';
import { SVGProps } from 'react';
import classes from './SvgConnectionLine.module.css';

type Props = {
  from: Position;
  to: Position;
  strokeDasharray?: SVGProps<SVGLineElement>['strokeDasharray'];
};

export function SvgConnectionLine({ from, to, strokeDasharray }: Props) {
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
      strokeDasharray={strokeDasharray}
      className={strokeDasharray ? classes.animate : undefined}
    />
  );
}
