import { Connection } from '../../types/Connection.ts';
import { TransputElementRefs } from '../../stores/transputElementRefs.ts';
import { getStringifiedTransputId } from '../getStringifiedTransputId.ts';
import { getElementOffsetRelativeToParent } from '../getElementOffsetRelativeToParent.ts';

const inset = 2; // amount of pixels to inset the connection from the edge of the transput

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

  // todo getBoundingClientRect is also done in getElementOffsetRelativeToParent below
  const transputRect = fromElementRef.current.getBoundingClientRect();

  // todo better approach for the magic number
  const parentsToCanvas = 5;
  const fromOffset = getElementOffsetRelativeToParent(fromElementRef.current, parentsToCanvas);
  const toOffset = getElementOffsetRelativeToParent(toElementRef.current, parentsToCanvas);

  const from = {
    left: fromOffset.left + transputRect.width - inset,
    top: fromOffset.top + transputRect.height / 2,
  };

  const to = {
    left: toOffset.left + inset,
    top: toOffset.top + transputRect.height / 2,
  };

  context.beginPath();
  context.moveTo(from.left, from.top);
  context.lineTo(to.left, to.top);

  context.strokeStyle = 'red';
  context.stroke();
  context.closePath();
}
