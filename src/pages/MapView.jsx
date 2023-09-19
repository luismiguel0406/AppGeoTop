import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  ImageOverlay,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import LocationMarker from "../components/Map/locationMarker";
import InfoPolygons from "../components/Map/InfoPolygons";
import MiniMap from "../components/Map/miniMap";
import GeoJsonLayer from "../components/Map/geoJsonLayer";
import { useNavigate } from "react-router-dom";

import { usePolygons } from "../hooks/usePolygons";
import SearchInput from "../components/Map/searchInput";

export const MapView = () => {
  const CHALLAPATA_CENTER = [-18.9023072, -66.7683362];
  const [searchData, setSearchData] = useState({ type: "1", value: "" });
  const [currentPolygon, setCurrentPolygon] = useState(CHALLAPATA_CENTER);
  const { landLayer, builtLayer, polygons } = usePolygons(searchData);
  let navigate = useNavigate()

  const handleOnChangeInput = (e) => {
    setSearchData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = () => {
    setSearchData({ type: "1", value: "" });
  };

  return (
    <>
      <div className="map-container">
        <SearchInput
          handleOnChangeInput={handleOnChangeInput}
          searchData={searchData}
          handleClose={handleClose}
        />
        <InfoPolygons
          polygons={polygons}
          setCurrentPolygon={setCurrentPolygon}
        />
        {/*Mover button a componente */}
        <button className="btn btn-success home-button" type="button" onClick={()=>{navigate('/', {replace:true})}}>
          <i
            className="fa-solid fa-home"
            style={{ color: "#fafafa" }}
          ></i>
          Ir a home
        </button>
        <MapContainer center={CHALLAPATA_CENTER} zoom={16}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution={
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
          />
          {/* <ImageOverlay
            url="src/assets/images/ortofoto.ecw"
            bounds={[
              [32, -118],
              [-56, -35],
            ]}
            zIndex={6}
          /> */}
          <FeatureGroup>
            <GeoJsonLayer feature={builtLayer} color="blue" />
            <GeoJsonLayer feature={landLayer} color="red" />
          </FeatureGroup>
          <LocationMarker currentPolygon={currentPolygon} />
          <MiniMap />
        </MapContainer>
      </div>
    </>
  );
};
