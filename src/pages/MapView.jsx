import { useState } from "react";
import { MapContainer, TileLayer, FeatureGroup, ImageOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import LocationMarker from "../components/Map/locationMarker";
import InfoPolygons from "../components/Map/InfoPolygons";
import MiniMap from "../components/Map/miniMap";
import GeoJsonLayer from "../components/Map/geoJsonLayer";

import { usePolygons } from "../hooks/usePolygons";
import SearchInput from "../components/Map/searchInput";

export const MapView = () => {
  const CHALLAPATA_CENTER = [-18.9023072, -66.7683362];
  const [searchData, setSearchData] = useState({ type: "1", value: "" });
  const [currentPolygon, setCurrentPolygon]= useState(CHALLAPATA_CENTER)
  const { landLayer, builtLayer, polygons} = usePolygons(searchData);

  const handleOnChangeInput = (e) => {
    setSearchData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  

  return (
    <>
      <div className="map-container">
        <SearchInput handleOnChangeInput={handleOnChangeInput} searchData={searchData}/>
         <InfoPolygons polygons={polygons} setCurrentPolygon={setCurrentPolygon}/>
          <MapContainer center={CHALLAPATA_CENTER} zoom={16}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution={
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }
            />
            <ImageOverlay
            url="src/assets/images/ortofoto.ecw"
            bounds={[[32, -118], [-56, -35]]}
            zIndex={6}
            />
            <FeatureGroup>
              <GeoJsonLayer feature={builtLayer} color="blue"/>
              <GeoJsonLayer feature={landLayer} color="red"/>
            </FeatureGroup>
            <LocationMarker currentPolygon={currentPolygon} />
            <MiniMap />
          </MapContainer>
      </div>
    </>
  );
};
