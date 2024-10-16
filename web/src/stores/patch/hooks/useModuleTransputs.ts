import { TransputType } from '../../../types/Transput.ts';
import { usePatchStore } from '../patchStore.ts';

export const useModuleTransputs = ({
  transputType,
  moduleId,
}: {
  moduleId: string;
  transputType: TransputType;
}) => {
  return usePatchStore((state) => {
    const module = state.modules.find((m) => m.id === moduleId);
    if (!module) return null;
    return transputType === 'input' ? module.transputs.in : module.transputs.out;
  });
};
