import { map } from "leaflet";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./leaflet.css";

const LeafMap = (props) => {
  var pos = props.pos;
  // const [position, setPosition] = useState([pos.lat, 73.0435]);
  // const pos
  // const getCurrentLocation = () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //     setPosition([position.coords.latitude, position.coords.longitude]);
  //   });
  // };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // const markerRef = useRef(null);
  // const mapRef = useRef(null);

  // useEffect(() => {
  //   var map = mapRef.current;
  //   if (map) map.flyTo(pos);
  // });

  // const eventHandlers = useMemo(
  //   () => ({
  //     dragend() {
  //       const marker = markerRef.current;
  //       if (marker != null) {
  //         console.log("Updating");
  //         props.updateMarker(marker.getLatLng());
  //       }
  //     },
  //   }),
  //   []
  // );
  console.log("pos", pos);
  return (
    <div>
      {/* <MapContainer center={pos} zoom={15} scrollWheelZoom={false} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={pos}
          draggable={true}
          eventHandlers={eventHandlers}
          ref={markerRef}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
      <div class="map">
        {pos?.lat & pos?.lng && (
          <iframe
            title="map"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_APIKEY}&center=${pos.lat},${pos.lng}&zoom=14&q=${pos.lat},${pos.lng}`}
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default LeafMap;
