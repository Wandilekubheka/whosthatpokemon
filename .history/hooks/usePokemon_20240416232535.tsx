import useSWR from "swr";

function useUser(id: string) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
