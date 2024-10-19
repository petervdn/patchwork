import { TransputIdentifier } from '../types/Connection.ts';

// todo: add id on the transput
export function getStringifiedTransputId({
  transputId,
  transputType,
  moduleId,
}: TransputIdentifier): string {
  return `${moduleId}-${transputType}-${transputId}`;
}
