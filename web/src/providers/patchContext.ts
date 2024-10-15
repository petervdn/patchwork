import { Patch } from '../types/Patch.ts';
import { createContext, RefObject } from 'react';

export type ModuleElements = Record<string, { elementRef: RefObject<HTMLElement> }>;

export type PatchContextValue = {
  patch: Patch | undefined;
  setPatch: (patch: Patch) => void;
  moduleElements: ModuleElements;
};

export const patchContext = createContext<PatchContextValue | undefined>(undefined);
