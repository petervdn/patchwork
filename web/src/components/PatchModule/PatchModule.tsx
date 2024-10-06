import classes from './PatchModule.module.css';
import { useGesture } from '@use-gesture/react';
import { useRef, useState } from 'react';
import { useModule, usePatchStore } from '../../utils/patchStore.ts';
import { Position } from '../../utils/types.ts';

type Props = {
  moduleId: string;
};

export function PatchModule({ moduleId }: Props) {
  const module = useModule(moduleId);
  const updateModule = usePatchStore((state) => state.updateModule);

  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });

  const elementRef = useRef<HTMLDivElement>(null);
  useGesture(
    {
      onDrag: (state) => {
        if (!module) {
          return;
        }
        setDragOffset({ x: state.movement[0], y: state.movement[1] });
        if (state.last) {
          setDragOffset({ x: 0, y: 0 });
          updateModule(moduleId, {
            position: {
              x: module.position.x + dragOffset.x,
              y: module.position.y + dragOffset.y,
            },
          });
        }
      },
    },
    { target: elementRef, eventOptions: { passive: false, capture: false } },
  );

  if (!module) {
    return null;
  }

  return (
    <div
      ref={elementRef}
      className={classes.wrapper}
      style={{
        left: module.position.x + dragOffset.x,
        top: module.position.y + dragOffset.y,
      }}
    >
      <h2>{module.type}</h2>
      <div className={classes.content}>Content</div>
    </div>
  );
}
