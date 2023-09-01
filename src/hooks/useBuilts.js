import { useQuery } from "@tanstack/react-query";
import { getBuilt } from "../service/map";

export const useBuilt = () => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["builts"],
    queryFn: getBuilt,
  });

  return { data, isLoading, isError, isFetching };
};
