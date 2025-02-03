import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import useMapStore from '../../../infrastructure/persistence/mapStore';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import customIconUrl from './icon/busstop.png';

// 設定預設的 marker 圖標
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;


// 建立自定義的圖示
const customIcon = L.icon({
  iconUrl: customIconUrl, // 自定義圖示的 URL
  iconSize: [15, 15], // 圖示的大小 (寬度, 高度)
  iconAnchor: [7.5, 7.5], // 圖示的錨點位置 (X, Y)
  popupAnchor: [0, -7.5] // Popup 顯示的錨點位置 (X, Y)
});

function ChangeView({ center }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center);
  }, [center, map]);
  return null;
}

const MapComponent = () => {
  const { position, siteLocations } = useMapStore()

  return (
    <MapContainer center={position} zoom={18} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {siteLocations.map((location, index) => (
        <Marker key={index} position={[location.latitude, location.longitude]} icon={customIcon} />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
