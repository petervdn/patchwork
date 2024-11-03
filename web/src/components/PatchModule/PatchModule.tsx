import classes from './PatchModule.module.css';
import { useRef } from 'react';
import { useDrag } from '@use-gesture/react';
import { useModule } from '../../stores/patch/hooks/useModule.ts';
import { Transputs } from '../Transputs/Transputs.tsx';
import { PatchModuleHeader } from './PatchModuleHeader.tsx';
import { updateModule } from '../../stores/patch/utils/updateModule.ts';
import { PatchModuleContent } from '../PatchModuleContent.tsx';
import { setSelection } from '../../stores/selection/selectionStore.ts';

type Props = {
  moduleId: string;
};

export function PatchModule({ moduleId }: Props) {
  const module = useModule(moduleId);

  const headerRef = useRef<HTMLDivElement>(null);
  useDrag(
    (state) => {
      if (!module) {
        return;
      }

      updateModule({
        id: module.id,
        position: {
          x: module.position.x + state.delta[0],
          y: module.position.y + state.delta[1],
        },
      });
    },
    { target: headerRef },
  );

  const onMouseDown = () => {
    setSelection({ type: 'module', id: moduleId });
  };

  if (!module) {
    return null;
  }

  return (
    <div
      className={classes.wrapper}
      style={{
        left: module.position.x,
        top: module.position.y,
      }}
      onMouseDown={onMouseDown}
    >
      {/* todo: pass ref to component? */}
      <div ref={headerRef} style={{ touchAction: 'none' }}>
        <PatchModuleHeader module={module} />
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.transputs}>
          <Transputs moduleId={moduleId} transputType={'input'} />
        </div>
        <div className={classes.content}>
          <PatchModuleContent />
        </div>
        <div className={classes.transputs}>
          <Transputs moduleId={moduleId} transputType={'output'} />
        </div>
      </div>
    </div>
  );
}
