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
var filterDate = d3.select("#datetime");

// create event handlers
filterButton.on("click", runEnter);
filterDate.on("submit", runEnter);

function runEnter() {
    // prevent the page from refreshing
    d3.event.preventDefault();

    // get the value property of the input date ==>> get the date input
    var startDate = d3.select("#datetime");
    var endDate = d3.select("#datetime-end");
    var inputStartDate = startDate.property("value");
    var inputEndDate = endDate.property("value");

    var cityName = d3.select("#city-name");
    var inputCity = cityName.property("value");

    var stateName = d3.select("#state-name");
    var inputState = cityName.property("value");


    console.log(inputStartDate);
    console.log(inputEndDate);
    console.log(inputCity);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputStartDate);

    console.log(filteredData);

    // filter by date or date range
    if (inputStartDate == "" && inputEndDate == "") {
        showFilteredData(tableData);
    }
    else if (inputEndDate == "" && inputStartDate != "") {
        showFilteredData(filteredData);
    }
    else {
        // both dates have values
        var filteredData = tableData.filter(sighting => (sighting.datetime >= inputStartDate && sighting.datetime <= inputEndDate));
        showFilteredData(filteredData);
    } 

    // filter by city
    if (inputCity != "") {
        var filteredData = tableData.filter(sighting => sighting.city === inputCity);
        showFilteredData(filteredData);
    }

    // filter by state 
    


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