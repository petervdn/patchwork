import { Connection, TransputIdentifier } from '../types/Connection.ts';
import { Position } from '../types/types.ts';
import { transputElementRefs } from '../stores/transputElementRefs.ts';
import { getStringifiedTransputId } from './getStringifiedTransputId.ts';
import { getElementOffsetRelativeToParent } from './getElementOffsetRelativeToParent.ts';

// todo why do we have both a transput and a transput identifier? (plus we should store id on the item)
export function getPositionForTransput(transput: TransputIdentifier): Position | null {
  const elementRef = transputElementRefs[getStringifiedTransputId(transput)];
  if (!elementRef.current) {
    return null;
  }

  const rect = elementRef.current.getBoundingClientRect();
  // todo better approach for the magic number
  const parentsToCanvas = 4;
  const offset = getElementOffsetRelativeToParent(elementRef.current, parentsToCanvas);

  return {
    x: offset.left + (transput.transputType === 'output' ? rect.width / 2 : 0),
    y: offset.top + rect.height / 2,
  };
}

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
