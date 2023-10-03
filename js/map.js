// Customize map style here
map.on('load', function () {
    // Define the bounding box for South America
    var southAmericaBounds = [
        [-81, -57], // Southwest coordinates
        [-52, 14]    // Northeast coordinates
    ];

    map.setMaxBounds(southAmericaBounds);

    map.dragRotate.disable();
});