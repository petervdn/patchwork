import { Connection } from '../../types/Connection.ts';
import { TransputElementRefs } from '../../stores/transputElementRefs.ts';
import { getStringifiedTransputId } from '../getStringifiedTransputId.ts';
import { getElementOffsetRelativeToParent } from '../getElementOffsetRelativeToParent.ts';

export function drawConnection({
  connection,
  context,
  transputElementRefs,
}: {
  context: CanvasRenderingContext2D;
  connection: Connection;
  transputElementRefs: TransputElementRefs;
}): void {
  const fromElementRef = transputElementRefs[getStringifiedTransputId(connection.from)];
  const toElementRef = transputElementRefs[getStringifiedTransputId(connection.to)];

  if (!fromElementRef.current || !toElementRef.current) {
    return;
  }

  const transputRect = fromElementRef.current.getBoundingClientRect();

  // todo better approach for the magic number
  const fromOffset = getElementOffsetRelativeToParent(fromElementRef.current, 3);
  const toOffset = getElementOffsetRelativeToParent(toElementRef.current, 3);

  const from = {
    left: fromOffset.left + transputRect.width / 2,
    top: fromOffset.top + transputRect.height,
  };

  const to = {
    left: toOffset.left + transputRect.width / 2,
    top: toOffset.top,
  };

  context.beginPath();
  context.moveTo(from.left, from.top);
  context.lineTo(to.left, to.top);

  context.strokeStyle = 'red';
  context.stroke();
  context.closePath();
}
