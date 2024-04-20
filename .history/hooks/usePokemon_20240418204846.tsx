import { useState } from "react";
import useSWR from "swr";

export default function usePokemon(id: string) 

  const [desc,setDesc] = useState("")
  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    fetcher
  );

  if(!error){
    setDesc(data.abilities.ability.url)
  }

  return {
    pokemonInfo: data,
    isLoading,
    isError: error,
  };
}
