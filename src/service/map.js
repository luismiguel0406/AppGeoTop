import { toast } from "react-hot-toast";
import httpClient from ".";
import { convertToGeoJsonLatLon } from "../helpers";

export const getLand = async () => {
  const response = await httpClient.get('terrenos19');
  const land = convertToGeoJsonLatLon(response.data.data);
  return land;
};

export const getBuilt = async () => {
  const response = await httpClient.get('construcciones19');
  const built = convertToGeoJsonLatLon(response.data.data);
  return built;
};

export const getPolygons = async ({ queryKey }) => {
  try {
    const [, { value, type }] = queryKey;
    const response = await httpClient.get(`/search/${value}/${type}`);
  
    const { data, error, message, found } = response.data;

    if (error) return toast.error(message);
    if(!data) return;
    const { terrenos, construcciones } = data;
    const lands = convertToGeoJsonLatLon(terrenos);
    const builts = convertToGeoJsonLatLon(construcciones);

    if(found) toast.success('Busqueda exitosa');
    return { lands, builts };

  } catch (error) {
    return toast.error(error.message);
  }
};
