import { SvgConnectionLine } from './SvgConnectionLine.tsx';
import { TransputIdentifier } from '../../types/Connection.ts';
import { Position } from '../../types/types.ts';
import { getPositionForTransput } from '../../utils/getConnectionFromToPositions.ts';
import { ReactElement } from 'react';

type Props = {
  transput: TransputIdentifier;
  mousePosition: Position;
};

export function SvgDragConnection({ mousePosition, transput }: Props): ReactElement | null {
  const from = getPositionForTransput(transput);

  if (!from) {
    return null;
  }

  return <SvgConnectionLine from={from} to={mousePosition} />;
}
