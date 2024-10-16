import { TransputIdentifier } from '../types/Connection.ts';

export function validateConnection({
  from,
  to,
}: {
  from: TransputIdentifier;
  to: TransputIdentifier;
}): boolean {
  if (from.transputType === 'input' || to.transputType === 'output') {
    throw new Error('Invalid parameters');
  }

  if (from.moduleId === to.moduleId) {
    throw new Error('Cannot connect two transputs of the same module');
  }
  return true;
}
