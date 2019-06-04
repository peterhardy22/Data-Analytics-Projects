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
  var dateInput = d3.select("#input");
  var dateValue = dateInput.property("value");

  // Filter tableData based on datetime element
  var filteredDate = tableData.filter(tableData => tableData.datetime === dateValue);

  // Loop through filteredDate
  filteredDate.forEach((dateData) => {
    var row = tbody.append("tr");
    Object.entries(dateData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});

// // CREATE FILTER BY CITY //
// // Function to take input and recreate table
// submit.on("click", function() {

//   // Stops page from refreshing
//   d3.event.preventDefault();

//   // Selects table in tbody tag
//   d3.select(".summary").html("");

//   // Create variables for input element and value
//   var cityInput = d3.select("#input");
//   var cityValue = cityInput.property("value");

//   // Filter tableData based on city element
//   var filteredCity = tableData.filter(tableData => tableData.city === cityValue);
  
//   // Loop through filteredCity
//   filteredCity.forEach((cityData) => {
//     var row = tbody.append("tr");
//     Object.entries(cityData).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });
// });

// // CREATE FILTER BY STATE//
// // Function to take input and recreate table
// submit.on("click", function() {

//   // Stops page from refreshing
//   d3.event.preventDefault();

//   // Selects table in tbody tag
//   d3.select(".summary").html("");

//   // Create variables for input element and value
//   var stateInput = d3.select("#input");
//   var stateValue = stateInput.property("value");
  
//   // Filter tableData based on state element
//   var filteredState = tableData.filter(tableData => tableData.state === stateValue);
  
//   // Loop through filteredState
//   filteredState.forEach((stateData) => {
//     var row = tbody.append("tr");
//     Object.entries(stateData).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });
// });

// // CREATE FILTER BY COUNTRY //
// // Function to take input and recreate table
// submit.on("click", function() {

//   // Stops page from refreshing
//   d3.event.preventDefault();

//   // Selects table in tbody tag
//   d3.select(".summary").html("");

//   // Create variables for input element and value
//   var countryInput = d3.select("#input");
//   var countryValue = countryInput.property("value");


//   // Filter tableData based on country element
//    var filteredCountry = tableData.filter(tableData => tableData.country === countryValue);

//   // Loop through filteredCountry
//   filteredCountry.forEach((countryData) => {
//     var row = tbody.append("tr");
//     Object.entries(countryData).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });
// });

// // CREATE FILTER BY SHAPE //
// // Function to take input and recreate table
// submit.on("click", function() {

//   // Stops page from refreshing
//   d3.event.preventDefault();

//   // Selects table in tbody tag
//   d3.select(".summary").html("");

//   // Create variables for input element and value
//   var shapeInput = d3.select("#input");
//   var shapeValue = shapeInput.property("value");

//   // Filter tableData based on shape element
//   var filteredShape = tableData.filter(tableData => tableData.shape === shapeValue);

//   // Loop through filteredShape
//   filteredShape.forEach((shapeData) => {
//     var row = tbody.append("tr");
//     Object.entries(shapeData).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });
// });