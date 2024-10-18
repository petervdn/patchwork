import { Connection, TransputIdentifier } from '../types/Connection.ts';

export function createConnection(
  transput1: TransputIdentifier,
  transput2: TransputIdentifier,
): Connection {
  if (transput1.transputType === transput2.transputType) {
    throw new Error(
      `Cannot connect an ${transput1.transputType} to another ${transput2.transputType}`,
    );
  }

  if (transput1.moduleId === transput2.moduleId) {
    throw new Error('Cannot connect two transputs of the same module');
  }

  return transput1.transputType === 'input'
    ? {
        from: transput2,
        to: transput1,
      }
    : {
        from: transput1,
        to: transput2,
      };
}
