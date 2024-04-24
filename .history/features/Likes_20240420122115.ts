import { create } from "zustand";

type Props = {
  pokemon: string[];
  addPokemon: () => void;
  removePokemon: () => void;
};
const useStore = create<Props>((set) => ({
  pokemon: [],
}));
