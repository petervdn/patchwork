import { create } from 'zustand';

type TransputIdentifier = { moduleId: string; transputId: string };

type UiStore = {
  connectionDragStart: TransputIdentifier | undefined;
};

export const useUiStore = create<UiStore>((set) => ({
  connectionDragStart: undefined,
  setConnectionDragStart: (connectionDragStart: TransputIdentifier) => set({ connectionDragStart }),
}));
