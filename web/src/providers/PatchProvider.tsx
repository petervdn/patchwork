import { PropsWithChildren, ReactElement, useMemo, useState } from 'react';
import { Patch } from '../types/Patch.ts';
import { patchContext, PatchContextValue } from './patchContext.ts';

export function PatchProvider({ children }: PropsWithChildren): ReactElement {
  const [patch, setPatch] = useState<Patch | undefined>(new Patch());

  const contextValue: PatchContextValue = useMemo(
    () => ({ patch, setPatch, moduleElements: {} }),
    [patch, setPatch],
  );

  return <patchContext.Provider value={contextValue}>{children}</patchContext.Provider>;
}
