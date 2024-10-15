import { Entity } from './types.ts';

export type Input = Entity & {
  type: 'input';
};
export type Output = Entity & {
  type: 'output';
};

export type Transput = Input | Output;
export type TransputType = Transput['type'];
