import { TransputType } from '../types/Transput.ts';
import { Patch } from '../types/Patch.ts';
import { getConnectedModulesToModule } from './getConnectedModulesToModule.ts';
import { ModuleWithIteration } from './getModuleOrder.ts';

// todo: return results instead of mutating incoming results array
export function traverseAndCollectModules({
  startModuleId,
  traverseType,
  results = [],
  iteration = 0,
  patch,
}: {
  startModuleId: string;
  traverseType: TransputType;
  results?: Array<ModuleWithIteration>;
  iteration?: number;
  patch: Patch;
}) {
  const connectedModules = getConnectedModulesToModule({
    connectedTo: traverseType,
    moduleId: startModuleId,
    patch,
  });

  if (connectedModules) {
    results.push(...connectedModules.map((id) => ({ id, iteration })));

    for (const connectedModule of connectedModules) {
      traverseAndCollectModules({
        startModuleId: connectedModule,
        traverseType,
        results,
        iteration: iteration + 1,
        patch,
      });
    }
  }

  return results;
}
