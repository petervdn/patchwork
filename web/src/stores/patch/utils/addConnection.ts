import { TransputIdentifier } from '../../../types/Connection.ts';
import { createConnection } from '../../../utils/createConnection.ts';
import { usePatchStore } from '../patchStore.ts';

export function addConnection(transput1: TransputIdentifier, transput2: TransputIdentifier): void {
  try {
    const connection = createConnection(transput1, transput2);

    usePatchStore.setState((state) => {
      return {
        connections: [...state.connections, connection],
      };
    });
  } catch (error) {
    console.error(error);
  }
}
