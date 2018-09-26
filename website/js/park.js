// Initialize and add the map
function initMap() {
    geocoder = new google.maps.Geocoder();
    // The location of Uluru
    var united_states = {lat: 37.09024, lng: -95.712891};
    // The map, centered at the US of A
    map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: united_states});
    addAllNationalParks();
}

function logLatLongFromAddress(address) {
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
            alert(results[0].geometry.location);
        }
        else {
            console.log(status);
            console.log(results);
        }
    });
}

function addMarkerFromAddress(address) {
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        }
        else {
            console.log(status);
            console.log(results);
        }
    });
}

function addAllNationalParks() {
    var park;
    park_arr = parks.split(",");
    for (park in park_arr) {
        addMarkerFromAddress(park_arr[park]);
    }
}

