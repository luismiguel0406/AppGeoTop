/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import Minimapbounds from './minibounds';

const MiniMap = ({zoom=0})=> {
  
        const parentMap = useMap();
        const mapZoom = zoom;

       
        const minimap = useMemo(
          () => (
            <MapContainer
              style={{ height: 80, width: 80 }}
              center={parentMap.getCenter()}
              zoom={mapZoom}
              dragging={false}
              doubleClickZoom={false}
              scrollWheelZoom={false}
              attributionControl={false}
              zoomControl={false}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Minimapbounds parentMap={parentMap} zoom={mapZoom} />
            </MapContainer>
          ),
          [],
        )
      
    
        return (
          <div className="leaflet-top leaflet-right">
            <div className="leaflet-control leaflet-bar">{minimap}</div>
          </div>
        )
      }


export default MiniMap;