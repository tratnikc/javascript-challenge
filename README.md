# javascript-challenge
 
## JavaScript amd DOM Manipulation

### included
1. UFO-level-1 folder
    * index.html
    * static/js/app.js

2. UFO-level-2 folder
    * index.html
    * static/js/app.js

### Requirements

#### Level 1 - Automatic Table and Data Search
* Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

    * Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

#### Level 2 - Multiple Search Categories
* Complete all of Level 1 criteria.

* Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

    * date/time
    * city
    * state
    * country
    * shape

### Notes 
#### UFO-level-1
1.  Takes Date as criteria to filter the table.
2.  Click Filter Table button or hit enter after entering the date will show the filtered records.

#### UFO-level-2
1. Search filters include
    a. Start Date
    b. End Date
    c. City
    d. State
    e. Country
    f. Shape

2. Expected outputs based on Date filters
    * Enter Start Date to filter table for that specific date
    * Enter Start Date and End Date to filter a range of dates inclusive
    * Enter End Date only to filter records up to the End Date
    * Blank Start Date and End Date retrieves all records

3. Expected outputs based on City, State, Country, Shape
    * Not case-sensitive, table will show all records based on the search parameters.

4. Table can be filtered using all search criteria by entering values and clicking Filter Table button.

