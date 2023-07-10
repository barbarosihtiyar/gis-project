import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { isparkLocation } from "../utils/constant";
import { addCustomMarker, handleMarkerHover } from "./addCustomMarker";
import "../style/locationIcon.scss";
import { useMainContext } from "../context/context";
import MyTable from "./MyTable";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFyYmFyb3NpaHRpeWFyIiwiYSI6ImNsam5mOW1ycjFiMmUzZm5vbzBxczFicTkifQ.NrxkXzSbCWv6dTxGL3vDBw";

const Map = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const { contain } = useMainContext();
  const { zooms } = useMainContext();
  const { setStatePopup } = useMainContext();
  const latitudeVal = window.localStorage.getItem("latitude");
  const longtitudeVal = window.localStorage.getItem("longitude");
  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center:
        window.localStorage.getItem("newTab") == "true"
          ? [longtitudeVal, latitudeVal]
          : [29.006932287504, 41.0543327967144],
      zoom: 14,
      interactive: true,
    });
    mapRef.current.on("load", () => {
      const newFilteredArray = isparkLocation.filter((station) => {
        if (contain.length === 0) {
          return -98 < station.LATITUDE && 98 > station.LONGITUDE;
        } else {
          const isFiltered = contain.filter((mapFilter) => {
            return (
              -98 < station.LATITUDE &&
              98 > station.LONGITUDE &&
              station[mapFilter.name]
                .toString()
                .includes(`${mapFilter.value.toUpperCase()}`)
            );
          });

          if (isFiltered.length === contain.length) {
            return station;
          } else {
            setStatePopup(true)
          }
        }
      });

      const markers = newFilteredArray.map((station) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([station.LONGITUDE, station.LATITUDE])
          .setOffset([0, -25])
          .addTo(mapRef.current);

        addCustomMarker(marker);

        marker.getElement().addEventListener("click", (e) => {
          const chooseMarker = e.target.parentNode.parentNode;
          markers.map((otherMarker) => {
            if (otherMarker !== marker) {
              otherMarker.getElement().classList.add("hidden");
            }
          });
          handleMarkerHover(chooseMarker, station);
          mapRef.current.setCenter([station.LONGITUDE, station.LATITUDE]);
          mapRef.current.setZoom(14);
        });

        return marker;
      });
    });

    return () => mapRef.current.remove();
  }, [contain, zooms]);

  const handleCellClick = (rowData) => {
    window.history.pushState(
      {},
      "",
      `${window.location.origin}${window.location.pathname}?id=${rowData._ID}&district=${rowData.COUNTY_NAME}&longitude=${rowData.LONGITUDE}&latitude=${rowData.LATITUDE}&parkingName=${rowData.PARK_NAME}`
    );

    mapRef.current.setCenter([rowData.LONGITUDE, rowData.LATITUDE]);
    mapRef.current.setZoom(14);
  };

  return (
    <>
      <div
        ref={mapContainerRef}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
      <MyTable handleCellClick={handleCellClick} />
    </>
  );
};

export default Map;
