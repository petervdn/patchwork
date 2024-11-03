import { Connection, TransputIdentifier } from '../types/Connection.ts';
import { Patch } from '../types/Patch.ts';
import { transputsAreEqual } from './transputsAreEqual.ts';

export function getConnectionsForTransput(
  transput: TransputIdentifier,
  patch: Patch,
): Array<Connection> {
  return transput.transputType === 'input'
    ? patch.connections.filter((connection) => {
        return transputsAreEqual(connection.to, transput);
      })
    : patch.connections.filter((connection) => {
        return transputsAreEqual(connection.from, transput);
      });
}
