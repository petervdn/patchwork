import { Module } from '../../../types/Module.ts';
import { produce } from 'immer';
import { usePatchStore } from '../patchStore.ts';

export function updateModule(module: Pick<Module, 'id' | 'position'>): void {
  usePatchStore.setState((state) => {
    return produce(state, (draftState) => {
      const moduleIndex = draftState.modules.findIndex((m) => m.id === module.id);
      draftState.modules[moduleIndex].position = module.position;
    });
  });
}
