import { create } from 'zustand';
import { TransputIdentifier } from '../types/Connection.ts';

type UiStore = {
  connectionDragStart: TransputIdentifier | undefined;
  setConnectionDragStart: (connectionDragStart: TransputIdentifier) => void;
};

export const useUiStore = create<UiStore>((set) => ({
  connectionDragStart: undefined,
  setConnectionDragStart: (connectionDragStart: TransputIdentifier) => set({ connectionDragStart }),
}));
