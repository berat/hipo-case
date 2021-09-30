import { useState, useRef } from "react";
import ReactMapGL from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

let Geocoder: any;

if (typeof window !== "undefined") {
  Geocoder = require("react-map-gl-geocoder").default;
}

const mapAccess = {
  mapboxApiAccessToken: "pk.xxxxxx.xxxxx-xxxxx",
};

const mapStyle = {
  width: "100%",
  height: "250px",
};

interface MProps {
  placeName: string;
}

const MainMap: React.FC<MProps> = ({ placeName }) => {
  const mapRef = useRef(null);
  const [getViewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 39.86667,
    longitude: 32.86667,
    zoom: 6,
  });

  return (
    <div>
      <ReactMapGL
        {...mapAccess}
        {...getViewport}
        {...mapStyle}
        ref={mapRef}
        attributionControl={false}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Geocoder
          mapRef={mapRef}
          {...mapAccess}
          viewport={getViewport}
          onClear={() => {
            setViewport({
              width: "100vw",
              height: "100vh",
              latitude: 39.86667,
              longitude: 32.86667,
              zoom: 6,
            });
          }}
          position="top-left"
        />
      </ReactMapGL>
    </div>
  );
};

export default MainMap;
