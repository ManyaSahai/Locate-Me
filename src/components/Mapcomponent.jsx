import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


const MapComponent = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}  
      zoom={13}  
      style={{ height: "400px", width: "100%" }}  
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'  // Attribution for map tiles
      />
      <Marker 
        position={[latitude, longitude]}  
        icon={L.icon({ 
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          iconSize: [25, 41], 
          iconAnchor: [12, 41],  
          popupAnchor: [1, -34],  
        })}
      >
        <Popup>{`Location: ${latitude}, ${longitude}`}</Popup>  // Popup that shows when the marker is clicked
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
