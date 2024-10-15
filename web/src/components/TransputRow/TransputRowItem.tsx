import classes from './TransputRowItem.module.css';
import { useRef } from 'react';
import { useGesture } from '@use-gesture/react';
import { Transput } from '../../types/Transput.ts';

type Props = {
  transput: Transput;
};

export function TransputRowItem({ transput }: Props) {
  const transputRef = useRef<HTMLDivElement>(null);

  useGesture(
    {
      onDrag: () => {
        console.log('drag');
      },
      onMouseOver: () => {
        console.log('mouse over');
      },
    },

    { target: transputRef, drag: { pointer: { capture: false } } },
  );

  return <div key={transput.id} className={classes.transput} ref={transputRef} />;
}
