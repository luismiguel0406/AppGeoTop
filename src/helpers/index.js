import 'proj4';
import proj4  from 'proj4';
import {v4 as uuid} from 'uuid';

//Convert To valid GeoJson
export const convertToGeoJsonLatLon = (data) => {

  const featureJson = data.map((item) => ({
     ...item,
    uuid: uuid()
  }));

  const geoJson = {
    type: "FeatureCollection",
    features: featureJson,
  };
  
  const geoJsonLatLon = {
    ...geoJson,
    features: geoJson.features.map((feature) => ({
      ...feature,
      geometry: {
        ...feature.geometry,
        coordinates: convertUTMToLatLon(feature.geometry.coordinates),
      },
    })),
  };

  return geoJsonLatLon;
};

//Convert Coordinates to LatLon wgs84 
export const convertUTMToLatLon = (coords) => {
  const FROM_PROJECTION = '+proj=utm +zone=19 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs';
  const TO_PROJECTION = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
  const latLon = coords.map((polygon) =>
      polygon.map((ring) => ring.map(([x, y]) => proj4(FROM_PROJECTION, TO_PROJECTION,[x, y])))
    );
    return latLon;
};



 



