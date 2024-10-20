import { useEffect, useRef } from 'react';
import { Size } from '../../types/types.ts';
import { useConnections } from '../../stores/patch/hooks/useConnections.ts';
import { useModules } from '../../stores/patch/hooks/useModules.ts';
import { SvgConnection } from './SvgConnection.tsx';

type Props = {
  size: Size;
};

export function PatchViewportBackground({ size }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | undefined | null>(undefined);

  const connections = useConnections();
  const modules = useModules();

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
  }, [size.height, size.width, modules]);

  // todo: fix numbers for arrowhead, no idea what i'm doing
  const arrowWidth = 5;
  const arrowLength = 4;
  const arrowString = `M 0,0 V${arrowWidth} L ${arrowLength},${arrowWidth * 0.5} Z`;

  return (
    <svg width={size.width} height={size.height}>
      <defs>
        <marker
          id="head"
          orient="auto"
          markerWidth="10"
          markerHeight="10"
          refX="0"
          refY={arrowWidth * 0.5}
        >
          <path d={arrowString} fill="white" />
        </marker>
      </defs>

      {connections.map((connection, index) => (
        <SvgConnection connection={connection} key={index} />
      ))}
    </svg>
  );
}
