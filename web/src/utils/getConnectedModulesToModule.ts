import { Patch } from '../types/Patch.ts';
import { TransputType } from '../types/Transput.ts';
import { getModuleTransputs } from './getModuleTransputs.ts';
import { getConnectionsForTransput } from './getConnectionsForTransput.ts';

export function getConnectedModulesToModule({
  connectedTo,
  moduleId,
  patch,
}: {
  moduleId: string;
  patch: Patch;
  connectedTo: TransputType;
}): Array<string> | null {
  const module = patch.modules.find(({ id }) => id === moduleId);

  if (!module) {
    return null;
  }

  const moduleTransputs = getModuleTransputs(module.type);

  const connections = (connectedTo === 'input' ? moduleTransputs.in : moduleTransputs.out).flatMap(
    (transput) =>
      getConnectionsForTransput(
        { transputId: transput.id, transputType: connectedTo, moduleId },
        patch,
      ),
  );

  return connections.map(
    (connection) => (connectedTo === 'input' ? connection.from : connection.to).moduleId,
  );
}
