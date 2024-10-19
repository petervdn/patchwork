import { useEffect, useRef } from 'react';
import { Size } from '../../types/types.ts';
import { useConnections } from '../../stores/patch/hooks/useConnections.ts';
import { drawConnection } from '../../utils/canvas/drawConnection.ts';
import { transputElementRefs } from '../../stores/transputElementRefs.ts';
import { useModules } from '../../stores/patch/hooks/useModules.ts';
import { useRerender } from '../../utils/hooks/useRerender.ts';

type Props = {
  size: Size;
};

export function PatchViewportBackground({ size }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | undefined | null>(undefined);

  const connections = useConnections();
  const modules = useModules();
  const { rerender, rerenderFlag } = useRerender();

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    canvasRef.current.width = size.width;
    canvasRef.current.height = size.height;
  }, [size.height, size.width]);

  useEffect(() => {
    contextRef.current = canvasRef.current?.getContext('2d');

    if (!contextRef.current) {
      return;
    }

    contextRef.current.fillStyle = '#E2DAD6';
    contextRef.current.fillRect(0, 0, size.width, size.height);
  }, [size.height, size.width, rerenderFlag]);

  useEffect(() => {
    if (!contextRef.current) {
      return;
    }

    for (const connection of connections) {
      drawConnection({ transputElementRefs, context: contextRef.current, connection });
    }
  }, [connections, rerenderFlag]);

  useEffect(() => {
    rerender();
  }, [modules, rerender]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}
