import { ModuleType } from '../../../types/Module.ts';
import { Position } from '../../../types/types.ts';
import { createModule } from '../../../utils/createModule.ts';
import { usePatchStore } from '../patchStore.ts';
import { createModuleId } from '../../../utils/createModuleId.ts';

export function addModule({ type, position }: { type: ModuleType; position: Position }): void {
  usePatchStore.setState((state) => {
    return {
      modules: [
        ...state.modules,
        createModule({
          id: createModuleId(),
          type,
          position,
        }),
      ],
    };
  });
}
