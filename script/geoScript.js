var map = L.map('map').setView([42.35, 26.19], 8);
    
    var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);

    var marker = L.marker([43.227556, 27.706358]).addTo(map)
        .bindPopup('<b>The Stone Forest</b>').openPopup();

    var marker = L.marker([43.175, 24.073]).addTo(map)
        .bindPopup('<b>Prohodna Cave</b>').openPopup();
        
    var marker = L.marker([43.243578, 25.033369]).addTo(map)
        .bindPopup('<b>Krushuna Waterfalls</b>').openPopup();

    

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent('You clicked the map at ' + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);