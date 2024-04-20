import { create } from "zustand";

type Props = {
  pokemon: { name: string; image: string }[];
  addPokemon: (pokemon_Object: { name: string; image: string }) => void;
  removePokemon: (pokemon_Object: { name: string; image: string }) => void;
};
const useLikes = create<Props>((set) => ({
  pokemon: [],
  addPokemon: (pokemonName) =>
    set((state) => ({ pokemon: [...state.pokemon, {}] })),
  removePokemon: (pokemonName) =>
    set((state) => ({
      pokemon: state.pokemon.filter(
        (pokemonName_) => pokemonName !== pokemonName_
      ),
    })),
}));

export { useLikes };
