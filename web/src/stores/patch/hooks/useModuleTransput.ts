import { TransputType } from '../../../types/Transput.ts';
import { usePatchStore } from '../patchStore.ts';

export const useModuleTransput = ({
  moduleId,
  transputId,
  transputType,
}: {
  transputId: string;
  moduleId: string;
  transputType: TransputType;
}) => {
  return usePatchStore((state) => {
    const module = state.modules.find((m) => m.id === moduleId);

    if (!module) return null;
    const transputs = transputType === 'input' ? module.transputs.in : module.transputs.out;
    return transputs.find((t) => t.id === transputId);
  });
};
