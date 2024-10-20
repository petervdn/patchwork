import { create } from 'zustand';
import { Module } from '../../types/Module.ts';
import { Connection } from '../../types/Connection.ts';

type PatchStoreState = {
  modules: Array<Module>;
  connections: Array<Connection>;
};

export const usePatchStore = create<PatchStoreState>(() => ({
  // todo: these should be objects for faster lookup
  // todo: nest again in a patch obj?
  modules: [],
  connections: [],
}));
