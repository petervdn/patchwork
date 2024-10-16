import { create } from 'zustand';
import { Patch } from '../types/Patch.ts';
import { Module, ModuleType } from '../types/Module.ts';
import { Position } from '../types/types.ts';
import { produce } from 'immer';
import { createNewModule } from '../utils/createNewModule.ts';
import { TransputType } from '../types/Transput.ts';

type PatchStoreState = {
  patch: Patch;
};

function createPatch(): Patch {
  return {
    modules: [],
    connections: [],
  };
}

export const usePatchStore = create<PatchStoreState>(() => ({
  patch: createPatch(),
}));

export const usePatchModules = () => usePatchStore((state) => state.patch.modules);
export const usePatchModule = (id: string) =>
  usePatchStore((state) => state.patch.modules.find((m) => m.id === id));

export const usePatchModuleTransput = ({
  moduleId,
  transputId,
  transputType,
}: {
  transputId: string;
  moduleId: string;
  transputType: TransputType;
}) => {
  return usePatchStore((state) => {
    const module = state.patch.modules.find((m) => m.id === moduleId);

    if (!module) return null;
    const transputs = transputType === 'input' ? module.transputs.in : module.transputs.out;
    return transputs.find((t) => t.id === transputId);
  });
};

export const usePatchModuleTransputs = ({
  transputType,
  moduleId,
}: {
  moduleId: string;
  transputType: TransputType;
}) => {
  return usePatchStore((state) => {
    const module = state.patch.modules.find((m) => m.id === moduleId);
    if (!module) return null;
    return transputType === 'input' ? module.transputs.in : module.transputs.out;
  });
};

export function addModule({ type, position }: { type: ModuleType; position: Position }): void {
  usePatchStore.setState((state) => {
    return produce(state, (draftState) => {
      draftState.patch.modules.push(
        createNewModule({
          id: `module-${draftState.patch.modules.length}`,
          type,
          position,
        }),
      );
    });
  });
}

export function addConnection(): void {}

export function updateModule(module: Pick<Module, 'id' | 'position'>): void {
  usePatchStore.setState((state) => {
    return produce(state, (draftState) => {
      const moduleIndex = draftState.patch.modules.findIndex((m) => m.id === module.id);
      draftState.patch.modules[moduleIndex].position = module.position;
    });
  });
}
