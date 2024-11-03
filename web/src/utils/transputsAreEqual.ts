import { TransputIdentifier } from '../types/Connection.ts';

export function transputsAreEqual(a: TransputIdentifier, b: TransputIdentifier): boolean {
  return (
    a.transputId === b.transputId && a.transputType === b.transputType && a.moduleId === b.moduleId
  );
}
