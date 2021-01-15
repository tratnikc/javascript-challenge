// from data.js
var tableData = data;

showFilteredData(tableData);

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

    if (inputDateValue == "") {
        showFilteredData(tableData);
    }
    else {
        showFilteredData(filteredData);
    }

};

function showFilteredData(filtered) {
    // get a reference to the table body
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
    console.log(filtered);
};