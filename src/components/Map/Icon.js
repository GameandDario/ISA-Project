import L from 'leaflet';

const iconPerson = new L.Icon({
  // iconUrl=IssMarker,
  // iconRetinaUrl=IssMarker, 

  iconUrl: require('./Marker.png'),
  iconRetinaUrl: require('./Marker.png'),
  iconAnchor: (25, 34),
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(50, 68),
  className: 'leaflet-div-icon'
});

export default iconPerson;