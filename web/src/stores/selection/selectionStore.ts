import { create } from 'zustand';

type Selection = { type: 'module' | 'connection'; id: string };

type SelectionStoreState = {
  selection: Selection | null;
};

export const useSelectionStore = create<SelectionStoreState>(() => ({
  selection: null,
}));

export function setSelection(selection: Selection | null): void {
  useSelectionStore.setState((state) => {
    return {
      ...state,
      selection,
    };
  });
}
