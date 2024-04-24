import { create } from "zustand";

type Props = {
  pokemon: { name: string; image: string }[];
  addPokemon: (pokemon_Object: { name: string; image: string }) => void;
  removePokemon: (pokemon_Object: { name: string; image: string }) => void;
};
const useLikes = create<Props>((set) => ({
  pokemon: [],
  addPokemon: (pokemon_Object) =>
    set((state) => ({ pokemon: [...state.pokemon] })),
  removePokemon: (pokemon_Object) =>
    set((state) => ({
      pokemon: state.pokemon.filter(
        (pokemonName_) => pokemon_Object.name !== pokemonName_.name
      ),
    })),
}));

export { useLikes };
