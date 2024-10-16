import { create } from 'zustand';
import { Module, ModuleType } from '../../types/Module.ts';
import { Position } from '../../types/types.ts';
import { produce } from 'immer';
import { createNewModule } from '../../utils/createNewModule.ts';

import { Connection, TransputIdentifier } from '../../types/Connection.ts';
import { validateConnection } from '../../utils/validateConnection.ts';

type PatchStoreState = {
  modules: Array<Module>;
  connections: Array<Connection>;
};

export const usePatchStore = create<PatchStoreState>(() => ({
  modules: [],
  connections: [],
}));

export function addModule({ type, position }: { type: ModuleType; position: Position }): void {
  usePatchStore.setState((state) => {
    return {
      modules: [
        ...state.modules,
        createNewModule({
          id: `module-${state.modules.length}`,
          type,
          position,
        }),
      ],
    };
  });
}

export function addConnection({
  to,
  from,
}: {
  from: TransputIdentifier;
  to: TransputIdentifier;
}): void {
  validateConnection({ from, to });

  usePatchStore.setState((state) => {
    return {
      connections: [
        ...state.connections,
        {
          from,
          to,
        },
      ],
    };
  });
}

export function updateModule(module: Pick<Module, 'id' | 'position'>): void {
  usePatchStore.setState((state) => {
    return produce(state, (draftState) => {
      const moduleIndex = draftState.modules.findIndex((m) => m.id === module.id);
      draftState.modules[moduleIndex].position = module.position;
    });
  });
}
