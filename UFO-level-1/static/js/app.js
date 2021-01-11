// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");

console.log(tableData);

// loop thru table and console log each row
tableData.forEach(function(sighting) {
    console.log(sighting);
});
