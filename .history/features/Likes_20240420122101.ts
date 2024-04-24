import { create } from "zustand";

type Props = {
  pokemon: string[];
  addPokemon: () => void;
};
const useStore = create<Props>((set) => ({
  pokemon: [],
}));
