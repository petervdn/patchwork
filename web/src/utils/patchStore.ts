import { create } from 'zustand';
import { Module, ModuleType, Patch } from './types.ts';

type PatchStore = {
  modules: Array<Module> | undefined;
  setPatch: (patch: Patch) => void;
  updateModule: (moduleId: string, module: Partial<Module>) => void;
  addModule: (moduleType: ModuleType) => void;
};

let idCounter = 0;

function getRandomPosition() {
  return { x: Math.random() * 800, y: Math.random() * 600 };
}

export const usePatchStore = create<PatchStore>((set) => ({
  modules: undefined,
  updateModule: (moduleId, module) => {
    set((state) => ({
      modules: state.modules?.map((m) => (m.id === moduleId ? { ...m, ...module } : m)),
    }));
  },
  addModule: (moduleType) => {
    set((state) => ({
      modules: [
        ...(state.modules ?? []),
        { id: (++idCounter).toString(), type: moduleType, position: getRandomPosition() },
      ],
    }));
  },
  setPatch: (patch) => {
    set({ modules: patch.modules });
  },
}));

export function useModule(moduleId: string) {
  return usePatchStore((state) => state.modules?.find((m) => m.id === moduleId));
}
