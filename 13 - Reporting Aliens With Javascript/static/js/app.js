// from data.js
var tableData = data;

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
table.attr("class", "ufo-table");

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
