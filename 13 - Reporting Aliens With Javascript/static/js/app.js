// from data.js
var tableData = data;
console.log(tableData);

// APPENDS TABLE TO WEB PAGE //
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the alien sighting data from data.js
console.log(data);

// Use D# to add data to webpage
data.forEach(function(alienSighting) {
  console.log(alienSighting);
  var row = tbody.append("tr");
  Object.entries(alienSighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
  });
});


// CREATE FILTER BY DATE //
// Create variable for the Filter Table button
var submit = d3.select("#submit");

// Function to take input and recreate table
submit.on("click", function() {

  // Stops page from refreshing
  d3.event.preventDefault();

  // Selects table in tbody tag
  d3.select(".summary").html("");

  // Create variables for input element and value
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  // Filter tableData based on datetime element
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  // Loop through filteredData
  filteredData.forEach((dateData) => {
    var row = tbody.append("tr");
    Object.entries(dateData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});