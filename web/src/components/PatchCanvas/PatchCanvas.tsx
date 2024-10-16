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
        <PatchModule moduleId={module.id} key={module.id} />
      ))}
    </div>
  );
}
