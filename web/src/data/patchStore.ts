import { create } from 'zustand';
import { Patch } from '../types/Patch.ts';
import { BaseModule, ModuleType } from '../types/Module.ts';
import { Position } from '../types/types.ts';
import { produce } from 'immer';
import { getModuleTransputs } from '../utils/getModuleTransputs.ts';

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

function createNewModule({
  id,
  position,
  type,
}: {
  type: ModuleType;
  position: Position;
  id: string;
}): BaseModule {
  return {
    id,
    type,
    position,
    transputs: getModuleTransputs(type),
    attributes: [],
  };
}
