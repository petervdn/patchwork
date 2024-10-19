import { Module, ModuleType } from '../types/Module.ts';
import { Position } from '../types/types.ts';
import { getModuleTransputs } from './getModuleTransputs.ts';

export function createModule({
  id,
  position,
  type,
}: {
  type: ModuleType;
  position: Position;
  id: string;
}): Module {
  return {
    id,
    type,
    position,
    transputs: getModuleTransputs(type),
    attributes: [],
  };
}
