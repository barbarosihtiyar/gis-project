import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { isparkLocation } from "../utils/constant";
import markerImage from "../images/512-5125487_location-finder-icon-png-transparent-png.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFyYmFyb3NpaHRpeWFyIiwiYSI6ImNsam5mOW1ycjFiMmUzZm5vbzBxczFicTkifQ.NrxkXzSbCWv6dTxGL3vDBw";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [29.056932287504, 41.0843327967144],
      zoom: 13,
    });

    map.on("load", () => {
      const newFilteredArray = isparkLocation.filter(
        (durak) => -98 < durak.LATITUDE && -98 < durak.LONGITUDE
      );

      newFilteredArray.forEach((station) => {
        const el = document.createElement("div");
        el.className = "custom-marker";
        el.style.backgroundImage = `url(https://www.vecteezy.com/png/10157991-pin-location-icon-sign-symbol-design)`;
        el.style.width = "32px";
        el.style.height = "32px";

        const marker = new mapboxgl.Marker(el)
          .setLngLat([station.LONGITUDE, station.LATITUDE])
          .addTo(map);

        const popup = new mapboxgl.Popup({ offset: 25 }).setText(station.durakAdi);
        marker.setPopup(popup);

        marker.getElement().addEventListener("click", () => {
          marker.togglePopup();
        });
      });
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Map;
