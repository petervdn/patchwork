import classes from './TransputsItem.module.css';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { TransputType } from '../../types/Transput.ts';
import { setConnectionDragMousePosition, useUiStore } from '../../utils/uiStore.ts';
import { useRegisterTransputElementRef } from '../../utils/hooks/useRegisterTransputElementRef.ts';
import { addConnection } from '../../stores/patch/utils/addConnection.ts';

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

    function onMouseMove(event: MouseEvent) {
      if (!transputRef.current) {
        return;
      }

      // todo refactor this
      const element =
        transputRef.current.parentElement?.parentElement?.parentElement?.parentElement
          ?.parentElement;
      if (!element) {
        return;
      }
      const containerElement = element.getBoundingClientRect();

      setConnectionDragMousePosition({
        x: event.x - containerElement.left,
        y: event.y - containerElement.top,
      });
    }

    if (mouseDown) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
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
