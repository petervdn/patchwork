import { usePatchStore } from '../patchStore.ts';

export const useModule = (id: string) =>
  usePatchStore((state) => state.modules.find((m) => m.id === id));
