// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
  console.log(data.features)
});

function createFeatures(earthquakeData) {

    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and time of the earthquake
    function onEachFeature(feature, layer) {
      layer.bindPopup("<h3>" + feature.properties.place +
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" 
        + "<h3>Magnitude: " + feature.properties.mag + "</h3>");
    }
  
    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature,
        pointToLayer: function(feature, latlng) {
            return new L.CircleMarker(latlng, {
                radius: (feature.properties.mag * 4),
                fillColor: fillColor(feature.properties.mag),
                fillOpacity: 0.85,
            });
        },
    });
                
//Sending our earthquakes layer to the createMap function
 createMap(earthquakes);
}

function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 11,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 11,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      40.71, -74.01
    ],
    zoom: 3,
    layers: [streetmap, earthquakes]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
  var legend = L.control({position: 'bottomright'});

legend.onAdd = function () {

    //Adding a legend to the map using magnitude
    var div = L.DomUtil.create('div', 'info legend');
        var magnitude = [0,1,2,3,4,5,6];
        var colors = magnitude.map(
           m => fillColor(m) 
        );
        var labels = [];


            magnitude.forEach(function(limit, index) {
                labels.push("<li style=\"background-color: " + fillColor(magnitude[index]) + "\" >" + magnitude[index] + "-" + magnitude[index+1] + "</li><br>");
              });
              div.innerHTML += "<ul>" + labels.join("") + "</ul>";   
              return div;
  };
  legend.addTo(myMap);
}

 // creating a function in order to hold the colors for the legend and markers
function fillColor(magnitude) {

    switch (true) {
      case magnitude >= 6.0:
        return 'red';
        break;
      
      case magnitude >= 5.0:
        return 'orangered';
        break;

      case magnitude >= 4.0:
        return 'darkorange';
        break;
      
      case magnitude >= 3.0:
        return 'orange';
        break;

      case magnitude >= 2.0:
        return 'gold';
        break;

      case magnitude >= 1.0:
        return 'yellow';
        break;

      default:
        return 'greenyellow';
    };
};
