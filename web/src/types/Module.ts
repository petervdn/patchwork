import { Entity, Position } from './types.ts';
import { Input, Output } from './Transput.ts';

export const moduleTypes = ['oscillator', 'gain', 'lfo', 'output'] as const;
export type ModuleType = (typeof moduleTypes)[number];

export type Module = Entity & {
  type: ModuleType;
  position: Position;
  transputs: {
    in: Array<Input>;
    out: Array<Output>;
  };
  attributes: Array<any>;
};
