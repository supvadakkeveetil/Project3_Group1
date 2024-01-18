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

fetch('view-source:https://github.com/supvadakkeveetil/Project3_Group1/blob/main/Fire_Map/output.geojson')
  .then(response => response.json())
  .then(data => {
    // Handle the response data
  })
  .catch(error => {
    // Handle any errors
  });

// Add a click event listener to the map based on year

map.on('click', function(e) {
    var clickedFeature = e.layer.feature;
    var year = clickedFeature.properties.fireYear;
});

    // Update the visualization based on the clicked year
    geojsonLayer.eachLayer(function(layer) {
        var featureYear = layer.feature.properties.fireYear;

        if (featureYear === year) {
            layer.on('click', function(event) {
                layer.setStyle({
                  color: 'red',
                  weight: 2,
                  opacity: 0.8,
                  fillColor: 'blue',
                  fillOpacity: 0.5
                });
              });
            layer.addTo(map);
        }
    })








    //Process the geojson data and add markers to the map

    L.geojson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: feature.properties.fireSize,
                fillColor: getColor(feature.properties.fireSize),
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup('Fire Name: ' + feature.properties.fireName + '<br>Cause of Fire: ' + feature.properites.fireCause + '<br>Fire Size in Acres: ' + feature.properties.fireSize);
        }
    }).addTo(map);

