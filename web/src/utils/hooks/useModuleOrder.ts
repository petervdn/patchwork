import { usePatch } from '../../stores/patch/hooks/usePatch.ts';
import { useMemo } from 'react';
import { getModuleOrder } from '../getModuleOrder.ts';

export function useModuleOrder() {
  const patch = usePatch();

  return useMemo(() => {
    const result = getModuleOrder({ patch });

    return result.reduce<Record<string, number>>((acc, item) => {
      const existingValue = acc[item.id];
      if (existingValue === undefined || existingValue < item.iteration) {
        acc[item.id] = item.iteration;
      }
      return acc;
    }, {});
  }, [patch]);
}
