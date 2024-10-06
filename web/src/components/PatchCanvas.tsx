import { Patch } from '../utils/types.ts';
import { PatchModule } from './PatchModule.tsx';

type Props = {
  patch: Patch;
};

export function PatchCanvas({ patch }: Props) {
  return (
    <div
      style={{
        margin: 20,
        height: 800,
        border: '1px solid ' + getComputedStyle(document.body).getPropertyValue('--dark'),
        position: 'relative',
      }}
    >
      {patch.modules.map((module) => (
        <PatchModule module={module} key={module.id} />
      ))}
    </div>
  );
}
