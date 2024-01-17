var map = L.map('map').setView([36.778, -119.417], 8); 

// Load the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



    // Load GeoJSON data
fetch('firefac.geojson')
    .then(response => response.json())
    .then(data => {
            // Filter GeoJSON features for Active stations
        var activeStations = data.features.filter(feature => feature.properties.FACILITY_S === 'Active');

            // Create markers and popups for each active station
        activeStations.forEach(station => {
            var coordinates = [station.properties.LAT, station.properties.LON]; 
            var stationName = station.properties.NAME;
            var stationCity= station.properties.CITY;
            var stationCounty =station.properties.COUNTY;
           
            //var marker = 
            L.marker(coordinates)
                //.bindPopup(stationName)
                .bindPopup("<h3><h3>Station Name:" + stationName + "<h3><h3>County: " + stationCounty +  "<h3><h3>City: " + stationCity + "</h3>")
                .addTo(map);
        });
        })
        .catch(error => console.error('Error loading GeoJSON:', error));



