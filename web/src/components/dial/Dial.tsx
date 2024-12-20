'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useDrag } from '@use-gesture/react';
import { useSizedCanvas } from '../../utils/hooks/useSizedCanvas.ts';
import { clampValue } from '../../utils/numberutils.ts';
import { drawDial } from './Dial.utils.ts';
import {
  StyledDialWrapper,
  StyledKnobLabel,
  StyledKnobWrapper,
  StyledRelativePositioner,
} from './Dial.styles.ts';
import { DialKnob } from '../dial-knob/DialKnob.tsx';

export const PRIMARY_COLOR = 'deepskyblue';

export type DialProps = {
  min: number;
  max: number;
  onChange?: (value: number) => void;
  value: number;
  size: number;
  pixelsForFullRange?: number;
  integer?: boolean;
  buttonSize: number;
  getLabel?: (value: number, isInteger: boolean) => string | number;
};

const defaultGetLabel = (value: number, integer: boolean) => value.toFixed(integer ? 0 : 2);

export function Dial({
  size,
  value,
  min,
  max,
  pixelsForFullRange = 200,
  onChange,
  buttonSize,
  integer = false,
  getLabel,
}: DialProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useSizedCanvas({ width: size, height: size, canvasRef });
  const startDragDataRef = useRef<{ value: number; y: number }>();

  const bind = useDrag((state) => {
    if (state.first) {
      startDragDataRef.current = { value, y: state.xy[1] };
    }
    const offset = state.xy[1] - startDragDataRef.current!.y;
    const deltaValue = (offset / pixelsForFullRange) * (max - min);
    const newValue = startDragDataRef.current!.value - deltaValue;

    onChange?.(clampValue(integer ? Math.trunc(newValue) : newValue, min, max));
  }, {});

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    drawDial({
      context: canvasRef.current.getContext('2d')!,
      valueFactor: (value - min) / (max - min),
      color: PRIMARY_COLOR,
      bgColor: '#555',
    });
  }, [value, max, min]);

  const labelValue = useMemo(
    () => (getLabel ? getLabel(value, integer) : defaultGetLabel(value, integer)),
    [value, integer, getLabel],
  );

  return (
    <StyledDialWrapper width={size}>
      <StyledRelativePositioner size={size}>
        <StyledKnobWrapper $leftTopOffset={size * 0.5 - buttonSize * 0.5}>
          <DialKnob size={buttonSize} />
        </StyledKnobWrapper>
        <canvas
          {...bind()}
          ref={canvasRef}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            touchAction: 'none',
          }}
        />
      </StyledRelativePositioner>
      <StyledKnobLabel>{labelValue}</StyledKnobLabel>
    </StyledDialWrapper>
  );
}
