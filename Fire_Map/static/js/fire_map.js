// Create a map using Leaflet and pass in some options

let map = L.map("map", {
    center: [
        37.09, -119.45
    ],
    zoom: 7
});
// Create layer for background

let basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Add background to the map

basemap.addTo(map);

// Retrieve the data from the geojson

fetch('https://raw.githubusercontent.com/supvadakkeveetil/Project3_Group1/master/Fire_Map/output.geojson')
  // Handle the response data
  .then(response => response.json())
  .then(data => {
    
  })
      // Handle any errors
  .catch(error => {

    

    // Create markers and popups for each Wildfire
    
   
  });


