import { useModules } from './useModules.ts';
import { useConnections } from './useConnections.ts';
import { Patch } from '../../../types/Patch.ts';

// todo: patch should be in patch store
export function usePatch(): Patch {
  const modules = useModules();
  const connections = useConnections();

  return {
    modules,
    connections,
  };
}
