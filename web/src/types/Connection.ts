import { TransputType } from './Transput.ts';
import { RefObject } from 'react';

// todo better name
export type TransputIdentifier = {
  moduleId: string;
  transputId: string;
  transputType: TransputType;
  ref: RefObject<HTMLElement>;
};

export type Connection = {
  from: TransputIdentifier;
  to: TransputIdentifier;
};
