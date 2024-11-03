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
  if (connectedTo === 'input') {
    const connections = moduleTransputs.in.flatMap((transput) =>
      getConnectionsForTransput(
        { transputId: transput.id, transputType: 'input', moduleId },
        patch,
      ),
    );

    return connections.map((connection) => connection.from.moduleId);
  }

  const connections = moduleTransputs.out.flatMap((output) =>
    getConnectionsForTransput({ transputId: output.id, transputType: 'output', moduleId }, patch),
  );

  return connections.map((connection) => connection.to.moduleId);
}
