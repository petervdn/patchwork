import classes from './TransputRowItem.module.css';
import { useRef } from 'react';
import { useGesture } from '@use-gesture/react';
import { TransputType } from '../../types/Transput.ts';
import { usePatchModuleTransput } from '../../data/patchStore.ts';

type Props = {
  transputId: string;
  moduleId: string;
  transputType: TransputType;
};

export function TransputRowItem({ transputId, moduleId, transputType }: Props) {
  const transputRef = useRef<HTMLDivElement>(null);

  const transput = usePatchModuleTransput({ transputId, moduleId, transputType });

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
  const onClick = () => {
    console.log({ transput });
  };

  return <div className={classes.transput} ref={transputRef} onClick={onClick} />;
}
