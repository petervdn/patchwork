type Entity = {
  id: string;
};

export type Input = Entity;
export type Output = Entity;

export type TransputType = 'input' | 'output';

export type Position = {
  x: number;
  y: number;
};

export const moduleTypes = ['oscillator', 'gain', 'lfo'] as const;
export type ModuleType = (typeof moduleTypes)[number];

export type Module = Entity & {
  type: ModuleType;
  position: Position;
};

export type Connection = {
  from: Output;
  to: Input;
};

export type Patch = {
  modules: Array<Module>;
  connections: Array<Connection>;
};
