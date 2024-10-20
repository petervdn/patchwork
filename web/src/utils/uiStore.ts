import { create } from 'zustand';
import { TransputIdentifier } from '../types/Connection.ts';
import { Position } from '../types/types.ts';

type UiStore = {
  connectionDragStart: TransputIdentifier | undefined;
  setConnectionDragStart: (connectionDragStart: TransputIdentifier | undefined) => void;
  connectionDragMousePosition: Position | undefined;
};

// todo: rename
export const useUiStore = create<UiStore>((set) => ({
  connectionDragStart: undefined,
  setConnectionDragStart: (connectionDragStart) => set({ connectionDragStart }),
  connectionDragMousePosition: undefined,
}));

export function setConnectionDragMousePosition(position: Position | undefined): void {
  useUiStore.setState(() => ({ connectionDragMousePosition: position }));
}
