import { TransputIdentifier } from '../types/Connection.ts';

export function getStringifiedTransputId({
  transputId,
  transputType,
  moduleId,
}: TransputIdentifier): string {
  return `${moduleId}-${transputType}-${transputId}`;
}
