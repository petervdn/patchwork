import { Patch } from '../../utils/types.ts';
import { PatchModule } from '../PatchModule/PatchModule.tsx';

type Props = {
  modules: Patch['modules'];
};

export function PatchCanvas({ modules }: Props) {
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
