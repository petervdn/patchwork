import { BaseModule } from './Module.ts';
import { Connection } from './Connection.ts';

export type Patch = {
  modules: Array<BaseModule>;
  connections: Array<Connection>;
};
