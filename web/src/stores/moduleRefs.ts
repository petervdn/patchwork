import { RefObject } from 'react';

type ModuleRefs = Record<string, RefObject<HTMLElement>>;
const _moduleRefs: ModuleRefs = {};

export const moduleRefs = new Proxy<ModuleRefs>(_moduleRefs, {
  set: (target, key: string, value) => {
    target[key] = value;
    return true;
  },
});
