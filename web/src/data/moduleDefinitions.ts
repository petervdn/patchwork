import { Input, ModuleType, Output } from '../utils/types.ts';

type ModuleDefinition = {
  inputs: Array<Input>;
  outputs: Array<Output>;
};

export const moduleDefinitions: Record<ModuleType, ModuleDefinition> = {
  oscillator: {
    inputs: [{ id: 'frequency' }, { id: 'detune' }],
    outputs: [{ id: 'output' }],
  },
  gain: {
    inputs: [{ id: 'input' }, { id: 'gain' }],
    outputs: [{ id: 'output' }],
  },
  lfo: {
    inputs: [{ id: 'frequency' }],
    outputs: [{ id: 'output' }],
  },
};

export function getModuleDefinition(type: ModuleType): ModuleDefinition {
  return moduleDefinitions[type];
}
