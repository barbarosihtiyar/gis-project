import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { isparkLocation } from "../utils/constant";
import { addCustomMarker, handleMarkerHover, handleMarkerHoverEnd } from "./addCustomMarker";
import "../style/locationIcon.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFyYmFyb3NpaHRpeWFyIiwiYSI6ImNsam5mOW1ycjFiMmUzZm5vbzBxczFicTkifQ.NrxkXzSbCWv6dTxGL3vDBw";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [29.056932287504, 41.0843327967144],
      zoom: 10,
      interactive: true,
    });

    map.on("load", () => {
      const newFilteredArray = isparkLocation.filter((station) => {
        return -98 < station.LATITUDE && -98 < station.LONGITUDE;
      });

      const markers = newFilteredArray.map((station) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([station.LONGITUDE, station.LATITUDE])
          .setOffset([0, -25])
          .addTo(map);

        addCustomMarker(marker);
        
        marker.getElement().addEventListener("click", (e) => {
          // Diğer markerları gizle
          const chooseMarker = e.target.parentNode.parentNode
          markers.map((otherMarker) => {
            if (otherMarker !== marker) {
              otherMarker.getElement().classList.add("hidden");
            }
          });
          handleMarkerHover(chooseMarker,station)
        });
        // marker.getElement().addEventListener("mouseleave", (e) => {
        //   // Diğer markerları göster
        //   const chooseMarker = e.target
        //   markers.map((otherMarker) => {
        //     if (otherMarker !== marker) {
        //       handleMarkerHoverEnd(otherMarker,chooseMarker,station)
        //     }
        //   });
        // });

        return marker;
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100vw", height: "100vh" }} />
  );
};

export default Map;
