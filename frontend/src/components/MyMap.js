import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';



function MyMap() {
  const position = [36.80, 10.18];
  const location = [36.84, 10.26];

  const viaMercato = [36.88566865000448, 10.323507697636495]
  const chickenHouse = [36.80157595795375, 10.18216602462037]
  const hobo = [36.841991949087856, 10.163512497635173]

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('../images/marker-icon-2x.png'),
    iconUrl: require('../images/marker-icon.png'),
    shadowUrl: require('../images/marker-shadow.png')
  });

  return (
    <MapContainer
      className="map"
      center={position}
      zoom={10}
      style={{ height: 500, width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* 
      <Marker position={location}>
      <Popup>Hello, I'm Via Mercato</Popup>
      </Marker> */}

      <Marker position={viaMercato}>
      <Popup>Bienvenue à Via Mercato </Popup>
      </Marker>

      <Marker position={chickenHouse}>
      <Popup>Bienvenue à Chicken House </Popup>
      </Marker>

      <Marker position={hobo}>
      <Popup>Bienvenue à HOBO </Popup>
      </Marker>
{/* 
      <Marker position={[36.80036811631928, 10.177233022453992]}> 
      </Marker> */}

      <LocationMarker />

      
    </MapContainer>
  );
}

export default MyMap;