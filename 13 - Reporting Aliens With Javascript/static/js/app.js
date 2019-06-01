// from data.js
var tableData = data;

// Get a reference to the input element on the page with the id property 
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

// APPENDS TABLE TO WEB PAGE //

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
table.attr("class", "table table-striped");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the alien sighting data from data.js
console.log(data);

// Use D# to add data to 
data.forEach((alienSighting) => {
  var row = tbody.append("tr");
  Object.entries(alienSighting).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});



// DATE FORM SET UP

 var submit = d3.select("#filter-btn");

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


// DATE FORM SET UP
// var date = d3.selectAll("td")
// // Select the submit button
// var submit = d3.select("#filter-btn");

// submit.on("click", function() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

//   var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

//   console.log(filteredData);

// });