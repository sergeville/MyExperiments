import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

const TripMap = () => {
  const stops = [
    { name: "Gatineau, QC", position: [45.4765, -75.7013] },
    { name: "Harrisburg, PA", position: [40.2732, -76.8867] },
    { name: "Charlotte, NC", position: [35.2271, -80.8431] },
    { name: "Jacksonville, FL", position: [30.3322, -81.6557] },
    { name: "Fort Lauderdale, FL", position: [26.1224, -80.1373] }
  ];

  return (
    <div className="h-[400px] w-full">
      <MapContainer center={[36, -80]} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {stops.map((stop, index) => (
          <Marker key={index} position={stop.position}>
            <Popup>{stop.name}</Popup>
          </Marker>
        ))}
        <Polyline positions={stops.map(stop => stop.position)} color="blue" />
      </MapContainer>
    </div>
  );
};

export default TripMap;
