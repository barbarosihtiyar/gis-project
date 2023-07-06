import mapboxgl from "mapbox-gl";


//Markerlar içinde div olusturur
export function addCustomMarker(marker) {
  const markerElement = marker.getElement();
  markerElement.classList.add("custom_marker");

  const customDiv = document.createElement("div");
  customDiv.classList.add("info");
  customDiv.classList.add("hidden");

  markerElement.appendChild(customDiv);
}

// Marker üzerinden çıkıldığında hover olayını başlatan fonksiyon
export function handleMarkerHover(chooseMarker,station) {
const infoDiv = chooseMarker.querySelector(".info");
console.log(chooseMarker)
infoDiv.classList.remove("hidden");

infoDiv.innerHTML = `
<div class="infoWrapper"> 
<div>
  <div><span class="infoHoverText">ID:</span> ${station._ID}</div>
  <div><span class="infoHoverText">İLÇE:</span> ${station.COUNTY_NAME}</div>
  <div><span class="infoHoverText">KONUM İSMİ:</span> ${station.LOCATION_NAME}</div>
  <div><span class="infoHoverText">OTOPARK AÇIKLAMASI:</span> ${station.PARK_TYPE_DESC}</div>
  <div><span class="infoHoverText">ÇALIŞMA SAATLERİ:</span> ${station.WORKING_TIME}</div>
  <div><span class="infoHoverText">KAPASİTE:</span> ${station.CAPACITY_OF_PARK}</div>
</div>
<span class="infoHoverTextIcon" id="closePopup">&times;</span>
</div>
`;

const closePopUp = document.getElementById("closePopup");
closePopUp.addEventListener("click", (e) => {
infoDiv.classList.add("hidden")
})
}

// Marker üzerinden çıkıldığında hover olayını sonlandıran fonksiyon
export function handleMarkerHoverEnd(otherMarker,chooseMarker) {
  otherMarker.getElement().classList.remove("hidden");
  const infoDiv = chooseMarker.querySelector(".info");
  infoDiv.innerHTML = ""
}


// marker.getElement().addEventListener('click', (e) => {
//         e.preventDefault(); // Varsayılan davranışı engelle
//         console.log("a")
//       });