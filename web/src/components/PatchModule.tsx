import { Module } from '../utils/types.ts';
import { useGesture } from '@use-gesture/react';
import { useRef } from 'react';

type Props = {
  module: Module;
};

export function PatchModule({ module }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  useGesture(
    {
      onDrag: (state) => {
        console.log(state);
      },
    },
    { target: elementRef, eventOptions: { passive: false, capture: false } },
  );

  return (
    <div
      style={{
        backgroundColor: 'white',
        width: 200,
        height: 100,
        position: 'absolute',
        left: module.position.x,
        top: module.position.y,
      }}
    >
      <h2 ref={elementRef}>Module</h2>
      <div>Content</div>
    </div>
  );
}
