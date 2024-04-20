import { create } from "zustand";

type Props = {
  pokemon: string[];
  addPokemon: (pokemonName: string) => void;
  removePokemon: (pokemonName: string) => void;
};
const useLikes = create<Props>((set) => ({
  pokemon: [],
  addPokemon: (pokemonName) =>
    set((state) => ({ pokemon: [...state.pokemon, pokemonName] })),
  removePokemon: () => {},
}));

export { useLikes };
