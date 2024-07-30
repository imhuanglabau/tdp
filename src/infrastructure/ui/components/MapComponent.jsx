import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet';
import L from 'leaflet';
import useMapStore from '../../../infrastructure/persistence/mapStore';

function ChangeView({ center }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center);
  }, [center, map]);
  return null;
}

const MapComponent = () => {
  const { position } = useMapStore();

 const icon = L.icon({
    iconUrl: '/marker.gif',
    iconSize: [50, 50], // size of the icon
});

  return (
    <MapContainer center={position} zoom={18} style={{ height: "100%", width: "100%" }}>
      <ChangeView center={position} />
      <Marker position={position} icon={icon} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;