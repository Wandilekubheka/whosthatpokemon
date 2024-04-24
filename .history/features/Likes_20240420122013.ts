import { create } from "zustand";

type Props = {
  pokemon: string[];
};
const useStore = create((set) => ({
  pokemon: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
