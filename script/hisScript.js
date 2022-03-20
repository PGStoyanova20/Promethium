var map = L.map('map').setView([42.35, 26.19], 8);
    
    var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);

    var marker = L.marker([41.524605, 23.391510]).addTo(map)
        .bindPopup('<b>Melnik</b>').openPopup();

    var marker = L.marker([43.075672, 25.617151]).addTo(map)
        .bindPopup('<b>Veliko Tarnovo</b>').openPopup();
        
    var marker = L.marker([43.99, 22.8725]).addTo(map)
        .bindPopup('<b>Vidin</b>').openPopup();

    

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent('You clicked the map at ' + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);