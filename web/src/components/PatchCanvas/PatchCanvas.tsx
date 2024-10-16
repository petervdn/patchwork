import { PatchModule } from '../PatchModule/PatchModule.tsx';
import { useModules } from '../../stores/patch/hooks/useModules.ts';

export function PatchCanvas() {
  const modules = useModules();

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
