import useSWR from "swr";

function useUser(id: string) {
  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
