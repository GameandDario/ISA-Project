import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('./Marker.png'),
    iconRetinaUrl: require('./Marker.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 68),
    className: 'leaflet-div-icon'
});

export default iconPerson;