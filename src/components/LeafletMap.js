import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function LeafletMap() {
  return (
    <section>
      <MapContainer center={{ lat: -6.9074225, lng: 107.6118312 }} zoom={16} scrollWheelZoom={false} style={{ width: "90%", height: 350 }} className="border-2 shadow-lg rounded-lg">
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-6.9074225, 107.6118312]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
