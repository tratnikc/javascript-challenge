// get data from data.js
var tableData = data;

// step 1 - append table to webpage
showFilteredData(tableData);

// step 2 - filter data using date
// select button using ID
var filterButton = d3.select("#filter-btn");

// select the date form using ID
var filterData = d3.select("#form");

// create event handlers
filterButton.on("click", runEnter);
filterData.on("submit", runEnter);

// uncomment the code below to filter the table each time 
// a search parameter value is entered or changed
//filterData.on("change", runEnter);

function runEnter() {
    // prevent the page from refreshing
    d3.event.preventDefault();

    // get the value property of the input date ==>> get the date input
    var startDate = d3.select("#datetime");
    var inputStartDate = startDate.property("value");
    
    var endDate = d3.select("#datetime-end");
    var inputEndDate = endDate.property("value");

    console.log(inputStartDate);
    console.log(inputEndDate);

    var cityName = d3.select("#city-name");
    var inputCity = cityName.property("value").toLowerCase();

    var stateName = d3.select("#state-name");
    var inputState = stateName.property("value").toLowerCase();

    var countryName = d3.select("#country-name");
    var inputCountry = countryName.property("value").toLowerCase();

    var shapeName = d3.select("#shape-name");
    var inputShape = shapeName.property("value").toLowerCase();

    var filteredData = tableData;

    // filter by date or date range
    if (inputStartDate == "" && inputEndDate == "") {
        var filteredData = tableData;
    }
    else if (inputStartDate != "" && inputEndDate == "") {
        var filteredData = tableData.filter(sighting => (new Date(sighting.datetime).toDateString() === new Date(inputStartDate).toDateString()));
    }
    else if (inputStartDate == "" && inputEndDate != "") {
        var filteredData = tableData.filter(sighting => (new Date(sighting.datetime) <= new Date(inputEndDate)));
    }
    else {
        // both dates have values
        var filteredData = tableData.filter(sighting => (new Date(sighting.datetime) >= new Date(inputStartDate) && 
                            new Date(sighting.datetime) <= new Date(inputEndDate) ));
    } 

    // filter by city
    if (inputCity != "") {
        var filteredData = filteredData.filter(sighting => sighting.city === inputCity);
    }

    // filter by state 
    if (inputState != "") {
        var filteredData = filteredData.filter(sighting => sighting.state === inputState);
    }

    // filter by country
    if (inputCountry != "") {
        var filteredData = filteredData.filter(sighting => sighting.country === inputCountry);
    }

    // filter by shape
    if (inputShape != "") {
        var filteredData = filteredData.filter(sighting => sighting.shape === inputShape);
    }

    showFilteredData(filteredData);
};

function showFilteredData(filtered) {

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
    recordedSightings(filtered);

};

function recordedSightings(filtered) {
    var records = d3.select("#number-of-records");
    records.html("");
    var row = records.append("row");
    var p = row.append("p").text(`${filtered.length} sightings recorded`).style("text-align", "center");
};