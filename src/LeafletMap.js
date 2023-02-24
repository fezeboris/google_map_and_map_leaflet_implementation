// import "leaflet/dist/leaflet.css";

import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

export const LeafletMap = () => {
  return (
    <div className="leafletContainer">
      <MapContainer
        center={[3.8451067712054816, 11.500939703447619]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ width: "98vw", height: "100vh" }}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          // url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[3.8451067712054816, 11.500939703447619]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
