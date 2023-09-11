import  { useEffect, useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet';

const LocationMarker = ({currentPolygon}) => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      load() {
        map.locate();
      },

      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    useEffect(()=>{  
      map.flyTo(currentPolygon, 18)
    },[currentPolygon])

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };
  export default LocationMarker;