import { RefObject } from 'react';

export type TransputElementRefs = Record<string, RefObject<HTMLElement>>;
const _moduleRefs: TransputElementRefs = {};

export const transputElementRefs = new Proxy<TransputElementRefs>(_moduleRefs, {
  set: (target, key: string, value) => {
    target[key] = value;
    return true;
  },
});
