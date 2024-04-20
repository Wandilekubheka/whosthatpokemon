import { create } from "zustand";

type Props = {
  pokemon: { name: string; image: string }[];
  addPokemon: (pokemon_Object: { name: string; image: string }) => void;
  removePokemon: (pokemon_Object: { name: string; image: string }) => void;
};
const useLikes = create<Props>((set) => ({
  pokemon: [],
  addPokemon: (pokemon_Object) =>
    set((state) => ({ pokemon: [...state.pokemon, pokemon_Object] })),
  removePokemon: (pokemon_Object) => {
    console.log(pokemon_Object);

    set((state) => ({
      pokemon: state.pokemon.filter(
        (pokemon_) => pokemon_Object.name !== pokemon_.name
      ),
    }));
  },
}));

export { useLikes };
