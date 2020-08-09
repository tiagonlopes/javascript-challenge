// from data.js
var tableData = data;

// YOUR CODE HERE!

//Create overall Table at the beginning
function init(){
    var tableInfo = d3.select("tbody");
    tableData.forEach((data)=>{
        tableInfo.append("tr");
        tableInfo.append("td").text(`${data.datetime}`);
        tableInfo.append("td").text(`${data.city}`);
        tableInfo.append("td").text(`${data.state}`);
        tableInfo.append("td").text(`${data.country}`);
        tableInfo.append("td").text(`${data.shape}`);
        tableInfo.append("td").text(`${data.durationMinutes}`);
        tableInfo.append("td").text(`${data.comments}`);
    });
}

//Select Form
var form = d3.select("form");

//Select Button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

var inputDate = d3.select("#datetime");
var inputDateValue = inputDate.property("value");

//Create RunEnter
function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");

    var filters ={
        datetime: inputDateValue.toLowerCase(),
        country: inputCountryValue.toLowerCase(),
        city: inputCityValue.toLowerCase(),
        shape: inputShapeValue.toLowerCase(),
        state: inputStateValue.toLowerCase()
    };

    function clean(dict) {
        Object.keys(dict).forEach(function(key){
            if(dict[key] == ""){delete dict[key]}
        });
    };
    
    clean(filters);

    //FILTERING INFO, needs to be additive method

    function filterData(array, filters) {
        const filterKeys = Object.keys(filters);
        return array.filter(item => {
          // validates all filter criteria
          return filterKeys.every(key => {
            return filters[key].includes(item[key]);
          });
        });
    };

    var result = filterData(tableData,filters);

    var tableInfo = d3.select("tbody");

    //Filter and add elements to the table

    tableInfo.html("");
    
    result.forEach((data)=>{
        tableInfo.append("tr");
        tableInfo.append("td").text(`${data.datetime}`);
        tableInfo.append("td").text(`${data.city}`);
        tableInfo.append("td").text(`${data.state}`);
        tableInfo.append("td").text(`${data.country}`);
        tableInfo.append("td").text(`${data.shape}`);
        tableInfo.append("td").text(`${data.durationMinutes}`);
        tableInfo.append("td").text(`${data.comments}`);
    });
};

init()
