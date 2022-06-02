let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.8119847, lng: -117.9191188 },
    zoom: 15,
  });
}