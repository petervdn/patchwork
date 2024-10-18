import { useEffect, useRef } from 'react';
import { Size } from '../../types/types.ts';

type Props = {
  size: Size;
};

export function PatchViewportBackground({ size }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    canvasRef.current.width = size.width;
    canvasRef.current.height = size.height;
  }, [size.height, size.width]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const context = canvasRef.current.getContext('2d')!;

    context.fillStyle = '#E2DAD6';
    context.fillRect(10, 10, size.width - 20, size.height - 20);
  }, [size.height, size.width]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}
