import { useQuery } from "@tanstack/react-query";
import { getPolygons } from "../service/map";


export const usePolygons = (searchData) => {
  const { data, isLoading, isError, isFetching } = useQuery(
    ["polygons", searchData],
    getPolygons,
    {
      enabled: searchData.value.length > 11, 
    }
  );
  const landLayer = data?.lands
  const builtLayer = data?.builts;

  const propertiesPolygons = {
    lands: landLayer?.features.map(({properties})=>(properties)) || [],
    builts: builtLayer?.features.map(({properties})=>(properties)) || [],
  };
  

  return {
    polygons: data,
    landLayer,
    builtLayer,
    propertiesPolygons,
    isLoading,
    isError,
    isFetching,
  };
};
