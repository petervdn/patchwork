import { PatchModule } from '../PatchModule/PatchModule.tsx';
import { useModules } from '../../stores/patch/hooks/useModules.ts';
import { PatchViewportBackground } from './PatchViewportBackground.tsx';
import { useEffect, useRef, useState } from 'react';
import { Size } from '../../types/types.ts';

export function PatchViewport() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const modules = useModules();
  const [viewportSize, setViewportSize] = useState<Size | undefined>();

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === wrapperRef.current) {
          setViewportSize({ width: entry.contentRect.width, height: entry.contentRect.height });
        }
      }
    });

    const element = wrapperRef.current;
    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        height: 800,
        border: '1px solid ' + getComputedStyle(document.body).getPropertyValue('--dark'),
        position: 'relative',
      }}
    >
      {modules.map((module) => (
        <PatchModule moduleId={module.id} key={module.id} />
      ))}
      {viewportSize && <PatchViewportBackground size={viewportSize} />}
    </div>
  );
}
