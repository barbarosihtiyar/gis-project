import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

//Markerlar içinde div olusturur
export function addCustomMarker(marker) {
  const markerElement = marker.getElement();
  markerElement.classList.add("custom_marker");

  const customDiv = document.createElement("div");
  customDiv.classList.add("info");
  markerElement.appendChild(customDiv);
}
let stateCheckPopup = null;

// Marker üzerinden çıkıldığında hover olayını başlatan fonksiyon
export function handleMarkerHover(chooseMarker, station) {
  const infoDiv = chooseMarker.querySelector(".info");
  console.log(chooseMarker);
  console.log(infoDiv);
  console.log(stateCheckPopup);
  if (stateCheckPopup == null) {
    infoDiv.style.display = "block";

    infoDiv.innerHTML = `
  <div class="infoWrapper" id=${station._ID}> 
  <div>
    <div><span class="infoHoverText">OTOPARK NO:</span> ${station._ID}</div>
    <div><span class="infoHoverText">İLÇE:</span> ${station.COUNTY_NAME}</div>
    <div><span class="infoHoverText">KONUM İSMİ:</span> ${station.LOCATION_NAME}</div>
    <div><span class="infoHoverText">OTOPARK AÇIKLAMASI:</span> ${station.PARK_TYPE_DESC}</div>
    <div><span class="infoHoverText">ÇALIŞMA SAATLERİ:</span> ${station.WORKING_TIME}</div>
    <div><span class="infoHoverText">KAPASİTE:</span> ${station.CAPACITY_OF_PARK}</div>
  </div>
  <div class="infoHoverTextIcon" id="closePopup">&times;</span>
  </div>
  `;
    const currentUrl = window.location.href;
    const newUrl = `${currentUrl}?id=${station._ID}&district=${station.COUNTY_NAME}&longitude=${station.LONGITUDE}&latitude=${station.LATITUDE}&parkingName=${station.PARK_NAME}`;
    stateCheckPopup = true;
    window.history.pushState({}, "", newUrl);
    console.log(stateCheckPopup);
    console.log(currentUrl);
    console.log(newUrl);
  } else {
    const infoDiv = document.getElementById(`${station._ID}`);
    infoDiv.parentNode.style.display = "none";
    stateCheckPopup = null;
    window.history.pushState(
      {},
      "",
      window.location.origin + window.location.pathname
    );
    const hiddenClasses = document.querySelectorAll(".hidden");
    hiddenClasses.forEach((hiddenClass) => {
      hiddenClass.classList.remove("hidden");
    });
  }
}

// Marker üzerinden çıkıldığında hover olayını sonlandıran fonksiyon
export function handleMarkerHoverEnd(otherMarker, chooseMarker) {
  otherMarker.getElement().classList.remove("hidden");
  // const infoDiv = chooseMarker.querySelector(".info");
}

// marker.getElement().addEventListener('click', (e) => {
//         e.preventDefault(); // Varsayılan davranışı engelle
//         console.log("a")
//       });
