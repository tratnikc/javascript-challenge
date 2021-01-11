// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");

console.log(tableData);

// step 1 - populate table
// loop thru table
// add empty table row 'tr' for each sighting
//
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
});



