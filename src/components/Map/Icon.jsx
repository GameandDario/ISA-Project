import L from 'leaflet';

const iconPerson = new L.Icon({
<<<<<<< HEAD:src/components/Map/Icon.js
  // iconUrl=IssMarker,
  // iconRetinaUrl=IssMarker, 

  iconUrl: require('./Marker.png'),
  iconRetinaUrl: require('./Marker.png'),
=======
  iconUrl: require('./Marker2.png'),
  iconRetinaUrl: require('./Marker2.png'),
>>>>>>> 8d54aa05dbea9368c2e293eb67c3cf676eb739f0:src/components/Map/Icon.jsx
  iconAnchor: (25, 34),
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(50, 50),
  className: 'leaflet-div-icon'
  
});

export default iconPerson;