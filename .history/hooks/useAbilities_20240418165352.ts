import useSWR from "swr";

export default function useAbilities(abilityUrl: string) {
  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(abilityUrl, fetcher);

  return {
    ability: data,
    isLoading,
    isError: error,
  };
}
