import { TransputIdentifier } from '../../types/Connection.ts';
import { useMount } from './useMount.ts';
import { getStringifiedTransputId } from '../getStringifiedTransputId.ts';
import { RefObject } from 'react';
import { transputElementRefs } from '../../stores/transputElementRefs.ts';

export function useRegisterTransputElementRef({
  transputIdentifier,
  transputRef,
}: {
  transputIdentifier: TransputIdentifier;
  transputRef: RefObject<HTMLElement>;
}) {
  useMount(() => {
    const key = getStringifiedTransputId(transputIdentifier);
    transputElementRefs[key] = transputRef;
  });
}
