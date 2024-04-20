import { create } from "zustand";

type Props = {
  pokemon: { name: string; image: string }[];
  addPokemon: (pokemonName: string) => void;
  removePokemon: (pokemonName: string) => void;
};
const useLikes = create<Props>((set) => ({
  pokemon: [],
  addPokemon: (pokemonName) =>
    set((state) => ({ pokemon: [...state.pokemon, pokemonName] })),
  removePokemon: (pokemonName) =>
    set((state) => ({
      pokemon: state.pokemon.filter(
        (pokemonName_) => pokemonName !== pokemonName_
      ),
    })),
}));

export { useLikes };
