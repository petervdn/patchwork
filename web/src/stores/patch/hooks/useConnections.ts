import { usePatchStore } from '../patchStore.ts';

export const useConnections = () => usePatchStore((state) => state.connections);
