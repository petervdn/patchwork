import { TransputIdentifier } from '../../types/Connection.ts';
import { useMount } from './useMount.ts';
import { moduleRefs } from '../../stores/moduleRefs.ts';
import { getStringifiedTransputId } from '../getStringifiedTransputId.ts';
import { RefObject } from 'react';

export function useRegisterTransputRef({
  transputIdentifier,
  transputRef,
}: {
  transputIdentifier: TransputIdentifier;
  transputRef: RefObject<HTMLElement>;
}) {
  useMount(() => {
    const key = getStringifiedTransputId(transputIdentifier);
    moduleRefs[key] = transputRef;
  });
}
