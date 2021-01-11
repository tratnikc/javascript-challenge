// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");

console.log(tableData);

// step 1 - populate table
// loop thru table
// add table row 'tr' for each sighting
// use Object.entries to append column data
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key,value]) {
        // append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// // refactor to use arrow functions
// tableData.forEach((sighting) => {
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(([key,value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });



