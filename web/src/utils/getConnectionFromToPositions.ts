import { Connection } from '../types/Connection.ts';
import { Position } from '../types/types.ts';
import { transputElementRefs } from '../stores/transputElementRefs.ts';
import { getStringifiedTransputId } from './getStringifiedTransputId.ts';
import { getElementOffsetRelativeToParent } from './getElementOffsetRelativeToParent.ts';

export function getConnectionFromToPositions(
  connection: Connection,
  inset = 0,
): { from: Position; to: Position } {
  const fromElementRef = transputElementRefs[getStringifiedTransputId(connection.from)];
  const toElementRef = transputElementRefs[getStringifiedTransputId(connection.to)];

  if (!fromElementRef.current || !toElementRef.current) {
    return {
      from: { x: 0, y: 0 },
      to: { x: 0, y: 0 },
    };
  }

  // todo getBoundingClientRect is also done in getElementOffsetRelativeToParent below
  const transputRect = fromElementRef.current.getBoundingClientRect();

  // todo better approach for the magic number
  const parentsToCanvas = 5;
  const fromOffset = getElementOffsetRelativeToParent(fromElementRef.current, parentsToCanvas);
  const toOffset = getElementOffsetRelativeToParent(toElementRef.current, parentsToCanvas);

  const from = {
    x: fromOffset.left + transputRect.width - inset,
    y: fromOffset.top + transputRect.height / 2,
  };

  const to = {
    x: toOffset.left + inset,
    y: toOffset.top + transputRect.height / 2,
  };

  return { from, to };
}
