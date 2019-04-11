import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import iconPerson from './Icon';

const LeafletMap = ({lat, lon}) => {
  
  const position = [lon, lat];
  
  return (
    <Map center={position} zoom={10}

      onViewportChange={(e) => { console.log(e);}
      }>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      />
      <Marker position={position}
        icon = {iconPerson} className='rotatemarker'>
          
      </Marker>
    </Map>
  );
};

export default LeafletMap;