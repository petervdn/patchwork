import { Module } from './Module.ts';
import { Connection } from './Connection.ts';

export type Patch = {
  modules: Array<Module>;
  connections: Array<Connection>;
};
