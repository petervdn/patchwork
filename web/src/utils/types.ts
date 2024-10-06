type Entity = {
  id: string;
};

type Input = Entity;
type Output = Entity;

type Position = {
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

type ModuleDefinition = {
  inputs: Array<Input>;
  outputs: Array<Output>;
};

export const moduleDefinitions: Record<ModuleType, ModuleDefinition> = {
  oscillator: {
    inputs: [{ id: 'frequency' }],
    outputs: [{ id: 'output' }],
  },
  gain: {
    inputs: [{ id: 'input' }],
    outputs: [{ id: 'output' }],
  },
  lfo: {
    inputs: [{ id: 'frequency' }],
    outputs: [{ id: 'output' }],
  },
};
