// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");

console.log(tableData);

// step 1 - append table to webpage
// loop thru table
// add table row 'tr' for each sighting
// use Object.entries to append column data
tableData.forEach(function(sighting) {
    // console.log(sighting);
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

// step 2 - filter data using date
// select button using ID
var filterButton = d3.select("#filter-btn");

// select the date form using ID
var filterData = d3.select("#form");

// create event handlers
filterButton.on("click", runEnter);
filterData.on("submit", runEnter);

function runEnter() {
    // prevent the page from refreshing
    d3.event.preventDefault();

    // get the value property of the input date ==>> get the date input
    var inputDate = d3.select("#datetime");
    var inputDateValue = inputDate.property("value");
    console.log(inputDateValue);

    var filteredData = tableData.filter(sighting => new Date(sighting.datetime).toDateString() === new Date(inputDateValue).toDateString());

    console.log(filteredData);

    if (inputDateValue == "") {
        showFilteredData(tableData);
    }
    else {
        showFilteredData(filteredData);
    }
};

function showFilteredData(filtered) {
    var sightings = filtered;
    var tbody = d3.select("tbody");
    // clear webpage table
    tbody.html("");
    // show data on webpage
    filtered.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    console.log(filtered.length);
}