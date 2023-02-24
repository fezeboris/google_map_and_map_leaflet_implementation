import React from "react";
import { useState } from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import { Config } from "./config";
const options = {
  zoom: 12,
  center: {
    lat: 3.8451067712054816,
    lng: 11.500939703447619,
  },
};

function MyMap() {
  const [mapContainer, setMapContainer] = useState(null);
  return (
    <GoogleMapsProvider
      googleMapsAPIKey={Config.GOOGLE_API}
      //   options={mapOptions}
      mapOptions={options}
      mapContainer={mapContainer}
    >
      <div ref={(node) => setMapContainer(node)} style={{ height: "100vh" }} />
    </GoogleMapsProvider>
  );
}

export default MyMap;
