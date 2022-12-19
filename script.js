var latOfCity = "44.34";
var lonOfCity = "10";
var citiAndDateEl = document.getElementById('citi-and-date');
var currentTempEl = document.getElementById('current-temp');
var inputEl = document.getElementById('exampleDataList');
var searchButton = document.getElementById("search-button");
console.log(searchButton);

//TODO create a list of options for input
var locationList = ['New York','San Francisco', 'Seattle', 'Los Angeles', 'Chicago'];



function getApi(){
console.log("start search");

 var inputValue = inputEl.value;
 console.log(inputValue);

//TODO get API to fetch lat and lon of input city



  var requestURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=c733f29fb2e44ff15762ff2d60996023&units=metric';
  //var requestURL = ('https://api.openweathermap.org/data/2.5/forecast?lat=' + latOfCity + '&lon=' + lonOfCity + '&appid=c733f29fb2e44ff15762ff2d60996023&units=imperial');
  
  fetch(requestURL)
   .then(function (response){
    return response.json();
   })
   .then(function(data){
    console.log(data)
    console.log(data.list[0].main.temp);

    currentTempEl.textContent = 'Temp: ' + data.list[0].main.temp + ' F';

    var currentDate = dayjs(data.list[0].dt_txt).format('DD/MM/YYYY'); 
    citiAndDateEl.textContent = data.city.name + "(" + currentDate + ")";


    //Loop over the data to generate 5 day forecast
    //for (var i=1; i < data.length; i++){}

    

   });



}



searchButton.addEventListener('click', getApi);



