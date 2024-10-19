import classes from './TransputsItem.module.css';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { TransputType } from '../../types/Transput.ts';
import { useUiStore } from '../../utils/uiStore.ts';
import { addConnection } from '../../stores/patch/patchStore.ts';
import { useRegisterTransputElementRef } from '../../utils/hooks/useRegisterTransputElementRef.ts';

type Props = {
  transputId: string;
  moduleId: string;
  transputType: TransputType;
};

export function TransputsItem({ transputId, moduleId, transputType }: Props) {
  const transputRef = useRef<HTMLDivElement>(null);
  const setConnectionDragStart = useUiStore((state) => state.setConnectionDragStart);
  const connectionDragStart = useUiStore((state) => state.connectionDragStart);
  const [mouseDown, setMouseDown] = React.useState(false);

  // const transput = useModuleTransput({ transputId, moduleId, transputType });

  const transputIdentifier = useMemo(
    () => ({ moduleId, transputId, transputType }),
    [moduleId, transputId, transputType],
  );

  useRegisterTransputElementRef({ transputIdentifier, transputRef });

  useEffect(() => {
    function onMouseUp() {
      setMouseDown(false);
      setConnectionDragStart(undefined);
    }

    if (mouseDown) {
      window.addEventListener('mouseup', onMouseUp);

      return () => {
        window.removeEventListener('mouseup', onMouseUp);
      };
    }
  }, [mouseDown, setConnectionDragStart]);

  const onMouseDown = useCallback(() => {
    setConnectionDragStart(transputIdentifier);
    setMouseDown(true);
  }, [setConnectionDragStart, transputIdentifier]);

  const onMouseUp = () => {
    if (!connectionDragStart) {
      return;
    }
    addConnection(transputIdentifier, connectionDragStart);
  };

  return (
    <div
      style={{
        backgroundColor: mouseDown ? 'red' : undefined,
      }}
      className={classes.transput}
      ref={transputRef}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
    >
      TR
    </div>
  );
}
