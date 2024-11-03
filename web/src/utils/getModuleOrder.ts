import { Patch } from '../types/Patch.ts';
import { TransputType } from '../types/Transput.ts';
import { traverseAndCollectModules } from './traverseAndCollectModules.ts';

export type ModuleWithIteration = {
  id: string;
  iteration: number;
};

export function getModuleOrder({
  patch,
  traverseType,
}: {
  patch: Patch;
  traverseType: TransputType; // todo: maybe TransputType isn't a good name?
}): Array<ModuleWithIteration> {
  const outputs = patch.modules.filter((module) => module.type === 'output');
  const results: Array<ModuleWithIteration> = [];

  for (const output of outputs) {
    traverseAndCollectModules({
      startModuleId: output.id,
      traverseType,
      results,
      iteration: 0,
      patch,
    });
  }

  return results;
}
