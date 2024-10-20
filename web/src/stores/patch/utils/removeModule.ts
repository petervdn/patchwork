import { usePatchStore } from '../patchStore.ts';

export function removeModule(moduleId: string): void {
  usePatchStore.setState((state) => {
    return {
      modules: state.modules.filter((module) => module.id !== moduleId),
      connections: state.connections.filter((connection) => {
        return connection.from.moduleId !== moduleId && connection.to.moduleId !== moduleId;
      }),
    };
  });
}
