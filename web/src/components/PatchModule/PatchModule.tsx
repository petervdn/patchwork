import classes from './PatchModule.module.css';
import { useRef, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { Position } from '../../types/types.ts';
import { updateModule } from '../../stores/patch/patchStore.ts';
import { useModule } from '../../stores/patch/hooks/useModule.ts';
import { Transputs } from '../Transputs/Transputs.tsx';
import { PatchModuleHeader } from './PatchModuleHeader.tsx';

type Props = {
  moduleId: string;
};

export function PatchModule({ moduleId }: Props) {
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  const module = useModule(moduleId);

  const headerRef = useRef<HTMLDivElement>(null);
  useDrag(
    (state) => {
      if (!module) {
        return;
      }

      setDragOffset({ x: state.movement[0], y: state.movement[1] });
      if (state.last) {
        updateModule({
          id: module.id,
          position: {
            x: module.position.x + dragOffset.x,
            y: module.position.y + dragOffset.y,
          },
        });
        setDragOffset({ x: 0, y: 0 });
      }
    },
    { target: headerRef },
  );

  if (!module) {
    return null;
  }

  return (
    <div
      className={classes.wrapper}
      style={{
        left: module.position.x + dragOffset.x,
        top: module.position.y + dragOffset.y,
      }}
    >
      <div ref={headerRef} style={{ touchAction: 'none' }}>
        <PatchModuleHeader module={module} />
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.transputs}>
          <Transputs moduleId={moduleId} transputType={'input'} />
        </div>
        <div className={classes.content}>[content]</div>
        <div className={classes.transputs}>
          <Transputs moduleId={moduleId} transputType={'output'} />
        </div>
      </div>
    </div>
  );
}
