import { create } from 'zustand';
import { Module, Patch } from './types.ts';

type PatchStore = {
  modules: Array<Module> | undefined;
  setPatch: (patch: Patch) => void;
  updateModule: (moduleId: string, module: Partial<Module>) => void;
};

export const usePatchStore = create<PatchStore>((set) => ({
  modules: undefined,
  updateModule: (moduleId, module) => {
    set((state) => ({
      modules: state.modules?.map((m) => (m.id === moduleId ? { ...m, ...module } : m)),
    }));
  },
  setPatch: (patch) => {
    set({ modules: patch.modules });
  },
}));

export function useModule(moduleId: string) {
  return usePatchStore((state) => state.modules?.find((m) => m.id === moduleId));
}
