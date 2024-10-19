import omit from 'lodash/omit';
import { usePatchStore } from '../patchStore.ts';

export function patchToJson(): string {
  const state = usePatchStore.getState();
  const toJsonModules = state.modules.map((module) => {
    return omit(module, 'transputs');
  });

  const toJsonState = {
    modules: toJsonModules,
    connections: state.connections,
  };

  return JSON.stringify(toJsonState, null, 2);
}
