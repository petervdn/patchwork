import { usePatchStore } from '../patchStore.ts';

export const useModules = () => usePatchStore((state) => state.modules);
