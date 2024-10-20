import { Connection } from '../../types/Connection.ts';
import { ReactElement } from 'react';
import { createConnectionLinePoints } from '../../utils/createConnectionLinePoints.ts';
import { getConnectionFromToPositions } from '../../utils/getConnectionFromToPositions.ts';

type Props = {
  connection: Connection;
};

export function SvgConnection({ connection }: Props): ReactElement {
  const { from, to } = getConnectionFromToPositions(connection);
  const points = createConnectionLinePoints({ from, to });
  const pathString = points.reduce((acc, point, index) => {
    const prefix = index === 0 ? 'M' : 'L';
    return `${acc} ${prefix} ${point.x} ${point.y}`;
  }, '');

  return (
    <path d={pathString} stroke={'white'} strokeWidth="3" fill="none" strokeLinejoin={'round'} />
  );
}
