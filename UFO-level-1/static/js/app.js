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

//Create RunEnter
function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputDate.property("value");
    
    var tableInfo = d3.select("tbody");

    tableInfo.html("");
    
    tableData.forEach((data)=>{
        if (data.datetime == inputValue){
        tableInfo.append("tr");
        tableInfo.append("td").text(`${data.datetime}`);
        tableInfo.append("td").text(`${data.city}`);
        tableInfo.append("td").text(`${data.state}`);
        tableInfo.append("td").text(`${data.country}`);
        tableInfo.append("td").text(`${data.shape}`);
        tableInfo.append("td").text(`${data.durationMinutes}`);
        tableInfo.append("td").text(`${data.comments}`);
        }

    });




};

init()
