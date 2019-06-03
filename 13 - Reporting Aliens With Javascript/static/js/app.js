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

var submit = d3.select("#submit");

 // function to take input and recreate table
 submit.on("click", function() {
   // stops page from refreshing
   d3.event.preventDefault();
 
   d3.select(".summary").html("");
 
   // user input as variable
   var inputElement = d3.select("#datetime");
   var inputValue = inputElement.property("value");
 
   // Filter Data
   var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
 
   // loop through
   filteredData.forEach((dateData) => {
     var row = tbody.append("tr");
     Object.entries(dateData).forEach(([key, value]) => {
       var cell = tbody.append("td");
       cell.text(value);
     });
   });
 });