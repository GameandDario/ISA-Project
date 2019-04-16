import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import iconPerson from './Icon';

const LeafletMap = ({lat, lon, zoom, updateZoom}) => {

  const position = [lon, lat];

  return (
    <Map center={position} zoom={zoom}

      onViewportChange={(e) => {updateZoom (e.zoom);}}>
      
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jul/{z}/{x}/{y}.png'
      />
      <Marker position={position}
        icon = {iconPerson}>
          
      </Marker>
    </Map>
  );
};

export default LeafletMap;