import { useEffect, useState } from "react";
import useSWR from "swr";

export default function usePokemon(id: string) {
  const [desc, setDesc] = useState("");
  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    fetcher
  );
  useEffect(() => {
    if (data !== undefined) {
      const {
        data: data_,
        error,
        isLoading,
      } = useSWR(data.abilities[0].ability.url);
      console.log(data_);

      // if (data !== undefined) {
      //   // setDesc(data_);
      // }
      // console.log(data_);
    }
  }, [data]);

  return {
    pokemonInfo: data,
    isLoading,
    isError: error,
    desc,
  };
}
