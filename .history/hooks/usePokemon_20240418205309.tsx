import { useState } from "react";
import useSWR from "swr";

export default function usePokemon(id: string) {
  const [desc, setDesc] = useState("");
  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    fetcher
  );
  console.log(data);

  if (data !== undefined) {
    setDesc(data.abilities.ability.url);

    // const { data: data_, error, isLoading } = useSWR(data);
  }

  return {
    pokemonInfo: data,
    isLoading,
    isError: error,
    desc,
  };
}
