import { Patch } from '../types/Patch.ts';

export function getModuleOrder(patch: Patch) {
  const outputs = patch.modules.filter((module) => module.type === 'output');
}
