import { Connection } from '../../types/Connection.ts';
import { ReactElement } from 'react';
import { getPositionForTransput } from '../../utils/getConnectionFromToPositions.ts';
import { SvgConnectionLine } from './SvgConnectionLine.tsx';

type Props = {
  connection: Connection;
};

export function SvgConnection({ connection }: Props): ReactElement | null {
  const from = getPositionForTransput(connection.from);
  const to = getPositionForTransput(connection.to);

  return from && to ? <SvgConnectionLine from={from} to={to} /> : null;
}
