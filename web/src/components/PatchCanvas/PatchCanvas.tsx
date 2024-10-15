import { PatchModule } from '../PatchModule/PatchModule.tsx';
import { usePatchModules } from '../../data/patchStore.ts';

export function PatchCanvas() {
  const modules = usePatchModules();

  return (
    <div
      style={{
        height: 800,
        border: '1px solid ' + getComputedStyle(document.body).getPropertyValue('--dark'),
        position: 'relative',
      }}
    >
      {modules.map((module) => (
        <PatchModule module={module} key={module.id} />
      ))}
    </div>
  );
}
