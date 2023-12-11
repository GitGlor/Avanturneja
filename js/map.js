// Coordinates for Novi Sad
var noviSadCoordinates = [19.8416, 45.2671];

// Create a marker
var marker = new mapboxgl.Marker()
    .setLngLat(noviSadCoordinates)
    .addTo(map);

// Add a click event listener to the marker
marker.getElement().addEventListener('click', function () {
    // Create a popup with an embedded YouTube video
    var popup = new mapboxgl.Popup()
        .setHTML(
            '<iframe width="400" height="225" src="https://www.youtube.com/embed/ZaJulqeHKMg" frameborder="0" allowfullscreen></iframe>'
        );

    // Display the popup
    marker.setPopup(popup);
    popup.addTo(map);

});