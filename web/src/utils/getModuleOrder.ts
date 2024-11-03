import { Patch } from '../types/Patch.ts';
import { traverseAndCollectModules } from './traverseAndCollectModules.ts';

export type ModuleWithIteration = {
  id: string;
  iteration: number;
};

export function getModuleOrder({ patch }: { patch: Patch }): Array<ModuleWithIteration> {
  const outputs = patch.modules.filter((module) => module.type === 'output');
  const results: Array<ModuleWithIteration> = outputs.map((output) => ({
    id: output.id,
    iteration: 0,
  }));

  for (const output of outputs) {
    traverseAndCollectModules({
      startModuleId: output.id,
      traverseType: 'input',
      results,
      iteration: 1,
      patch,
    });
  }

  return results;
}
