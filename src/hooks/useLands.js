import { getLand } from "../service/map";
import { useQuery } from "@tanstack/react-query";

export const useLands = () => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["lands"],
    queryFn: getLand,
  });

  return { data, isLoading, isError, isFetching };
};
