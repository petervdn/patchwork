import classes from './PatchModule.module.css';
import { TransputRow } from '../TransputRow/TransputRow.tsx';
import { useRef, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { Position } from '../../types/types.ts';
import { BaseModule } from '../../types/Module.ts';

type Props = {
  module: BaseModule;
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
        setDragOffset({ x: 0, y: 0 });
        // updateModule(moduleId, {
        //   position: {
        //     x: module.position.x + dragOffset.x,
        //     y: module.position.y + dragOffset.y,
        //   },
        // });
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
