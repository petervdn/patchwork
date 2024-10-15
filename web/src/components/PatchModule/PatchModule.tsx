import classes from './PatchModule.module.css';
import { TransputRow } from '../TransputRow/TransputRow.tsx';
import { useRef, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { Position } from '../../types/types.ts';
import { Module } from '../../types/Module.ts';
import { updateModule } from '../../data/patchStore.ts';

type Props = {
  module: Module;
};

export function PatchModule({ module }: Props) {
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });

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

  return (
    <div
      className={classes.wrapper}
      style={{
        left: module.position.x + dragOffset.x,
        top: module.position.y + dragOffset.y,
      }}
    >
      <TransputRow transputs={module.transputs.in} />
      <h2 ref={headerRef}>
        {module.type} (id={module.id})
      </h2>
      <div className={classes.content}>[content]</div>
      <TransputRow transputs={module.transputs.out} />
    </div>
  );
}
