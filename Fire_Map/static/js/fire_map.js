// Create a map using Leaflet and pass in some options

let map = L.map("map", {
    center: [
        37.09, -119.45
    ],
    zoom: 4
});
// Create layer for background

let basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Add background to the map

basemap.addTo(map);

// Retrieve the data from the geojson

fetch('https://github.com/supvadakkeveetil/Project3_Group1/raw/main/Fire_Map/static/js/fire_map.js')
  .then(response => response.json())
  .then(data => {
    // Handle the response data
  })
  .catch(error => {
    // Handle any errors
  });



