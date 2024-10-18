import { TransputType } from './Transput.ts';

// todo better name
export type TransputIdentifier = {
  moduleId: string;
  transputId: string;
  transputType: TransputType;
  // ref: RefObject<HTMLElement>;
};

export type Connection = {
  from: TransputIdentifier;
  to: TransputIdentifier;
};
