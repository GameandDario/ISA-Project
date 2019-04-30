import L from 'leaflet';

const iconPerson = new L.Icon({
  iconUrl: require('./Marker2.png'),
  iconRetinaUrl: require('./Marker2.png'),
  iconAnchor: (25, 25),
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(50, 50),
  className: 'leaflet-div-icon'
  
});

export default iconPerson;