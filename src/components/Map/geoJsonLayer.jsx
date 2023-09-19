import L from "leaflet";
import { useMap } from "react-leaflet";

const GeoJsonLayer = ({ feature, color }) => {
  const map = useMap();
  //layer
  L.geoJSON(feature, {
    style: {
      weight: 1.5,
      color,
      opacity: 1.0,
      fillColor:'transparent'
    },
  })
    .bindPopup(
      (layer) => `<div">  
                        <p><strong> Codigo catastral:</strong> ${layer.feature.properties?.codigo}       </p> 
                        <p>
                            <strong> Propietario: </strong>
                            ${layer.feature.properties?.nombre ?? "" }
                            ${layer.feature.properties?.apellidos ?? ""}  
                        </p>
                        <p> <strong> Superficie: </strong> ${layer.feature.properties.superficie ?? 0} m² </p>
                  </div>`
    )
    .addTo(map);
  //map.fitBounds(layer.getBounds());

  return null;
};

export default GeoJsonLayer;
