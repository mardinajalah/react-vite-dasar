import { create } from 'zustand';

interface MainCountStore {
  count: number;
  dicrement: () => void
  increment: () => void
}

export const useCountStore = create<MainCountStore>((set) => ({
  count: 0,
  dicrement: () => set((state) => ({count: state.count - 1})),
  increment: () => set((state) => ({count: state.count + 1})),
}));