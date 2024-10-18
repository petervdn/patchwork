import classes from './TransputRowItem.module.css';
import { useMemo, useRef } from 'react';
import { useGesture } from '@use-gesture/react';
import { TransputType } from '../../types/Transput.ts';
import { useUiStore } from '../../utils/uiStore.ts';
import { useModuleTransput } from '../../stores/patch/hooks/useModuleTransput.ts';
import { addConnection } from '../../stores/patch/patchStore.ts';
import { useRegisterTransputRef } from '../../utils/hooks/useRegisterTransputRef.ts';

type Props = {
  transputId: string;
  moduleId: string;
  transputType: TransputType;
};

export function TransputRowItem({ transputId, moduleId, transputType }: Props) {
  const transputRef = useRef<HTMLDivElement>(null);
  const setConnectionDragStart = useUiStore((state) => state.setConnectionDragStart);
  const connectionDragStart = useUiStore((state) => state.connectionDragStart);

  const transput = useModuleTransput({ transputId, moduleId, transputType });

  const transputIdentifier = useMemo(
    () => ({ moduleId, transputId, transputType }),
    [moduleId, transputId, transputType],
  );

  useRegisterTransputRef({ transputIdentifier, transputRef });

  useGesture(
    {
      onDrag: (state) => {
        if (state.first) {
          setConnectionDragStart(transputIdentifier);
        }
      },
    },

    { target: transputRef, drag: { pointer: { capture: false } } },
  );
  const onMouseUp = () => {
    if (!connectionDragStart) {
      return;
    }
    // todo move logic to addConnection function
    if (connectionDragStart.transputType === 'input') {
      addConnection({ from: transputIdentifier, to: connectionDragStart });
    } else {
      addConnection({ from: connectionDragStart, to: transputIdentifier });
    }
    console.log({ transput });
  };

  return <div className={classes.transput} ref={transputRef} onMouseUp={onMouseUp} />;
}
