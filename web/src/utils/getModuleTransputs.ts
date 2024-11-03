import { Module, ModuleType } from '../types/Module.ts';
import { run } from './run.ts';

export function getModuleTransputs(moduleType: ModuleType): Module['transputs'] {
  const transputsDefinition = run(() => {
    switch (moduleType) {
      case 'oscillator':
        return {
          inputs: ['frequency', 'waveform', 'amp'],
          outputs: ['output'],
        };
      case 'gain':
        return {
          inputs: ['input'],
          outputs: ['output'],
        };
      case 'lfo':
        return {
          inputs: [],
          outputs: ['output'],
        };
      case 'output':
        return {
          inputs: ['input'],
          outputs: [],
        };
    }
  });

  return {
    in: transputsDefinition.inputs.map((id) => ({ id, type: 'input' })),
    out: transputsDefinition.outputs.map((id) => ({ id, type: 'output' })),
  };
}
