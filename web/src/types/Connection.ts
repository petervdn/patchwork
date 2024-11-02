import { TransputType } from './Transput.ts';

export type TransputIdentifier = {
  moduleId: string;
  transputId: string;
  transputType: TransputType;
};

export type Connection = {
  from: TransputIdentifier;
  to: TransputIdentifier;
};
