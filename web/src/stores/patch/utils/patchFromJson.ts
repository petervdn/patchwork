import { usePatchStore } from '../patchStore.ts';
import { createModule } from '../../../utils/createModule.ts';
import { z } from 'zod';
import { moduleTypes } from '../../../types/Module.ts';

const ModuleTypeSchema = z.enum(moduleTypes);

// todo: also use for generating output
const schema = z.object({
  modules: z.array(
    z.object({
      id: z.string(),
      type: ModuleTypeSchema,
      position: z.object({
        x: z.number(),
        y: z.number(),
      }),
    }),
  ),
});

export function patchFromJson(jsonString: string): void {
  const json = schema.parse(JSON.parse(jsonString));
  const modules = json.modules.map((module) => createModule(module));

  usePatchStore.setState(() => {
    return {
      modules,
      connections: [],
    };
  });
}
