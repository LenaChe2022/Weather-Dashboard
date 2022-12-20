var latOfCity;
var lonOfCity;
var citiAndDateEl = document.getElementById('citi-and-date');
var currentTempEl = document.getElementById('current-temp');
var currentWindEl = document.getElementById('current-wind');
var currentHumidityEl = document.getElementById('current-humidity');
var currentSymbolEl = document.getElementById('current-symbol');
var inputEl = document.getElementById('exampleDataList');
var searchButton = document.getElementById("search-button");
var dataListEl = document.getElementById("datalistOptions");
console.log(searchButton);


//create a list of options for input
var citiesUS = [
    "New York", "Los Angeles", "Chicago", "Houston","Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin",
    "Redmond",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "San Francisco",
    "Charlotte",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington",
    "Nashville",
    "El Paso",
    "Portland",
    "Las Vegas",
    "Louisville",
    "Oklahoma City",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Mesa",
    "Atlanta",
    "Colorado Springs",
    "Raleigh",
    "Long Beach",
    "Virginia Beach",
    "Oakland",
    "Minneapolis",
    "Wichita",
    "Arlington",
    "Tampa",
    "New Orleans",
    "Corpus Christi",
    "Lexington",
    "Anchorage",
    "Stockton",
    "Saint Paul",
    "Toledo",
    "Newark",
    "Plano",
    "Henderson",
    "Lincoln",
    "Fort Wayne",
    "Glendale",
    "Greensboro",
    "Chandler",
    "Scottsdale",
    "North Las Vegas",
    "Gilbert",
    "Reno",
    "Baton Rouge",
    "Irvine",
    "Chesapeake",
    "Irving",
    "Birmingham",
    "Madison",
    "Durham",
    "Laredo",
    "Lubbock",
    "Winston-Salem",
    "Garland",
    "Hialeah",
    "Norfolk",
    "Chesapeake",
    "Arlington",
    "Grand Rapids",
    "Shreveport",
    "Reno",
    "Akron",
    "Durham",
    "Modesto",
    "Montgomery",
    "Spokane",
    "Des Moines",
    "Tacoma",
    "Richmond",
    "Fayetteville",
    "Baton Rouge",
    "Spokane Valley",
    "Greensboro",
    "Salem",
    "Rockford",
    "Grand Prairie",
    "Torrance",
    "Bridgeport",
    "Lakewood",
    "Naperville",
    "Aurora",
    "Pomona",
    "Paterson",
    "Lancaster",
    "Elyria",
    "Hayward",
    "Visalia",
    "Coral Springs",
    "Salem",
    "Eugene",
    "Pembroke Pines",
    "Peoria",
    "Elizabeth",
    "Fullerton",
    "Athens-Clarke County",
    "Downey",
    "Ventura",
    "Carlsbad",
    "Waterbury",
    "Costa Mesa",
    "Manchester",
    "Murfreesboro",
    "Billings",
    "South Bend",
    "Surprise",
    "Lowell",
    "Norwalk",
    "Richardson",
    "Elk Grove",
    "West Valley City",
    "San Angelo",
    "Sandy Springs",
    "Davenport",
    "Yuba City",
    "San Marcos",
    "Vacaville",
    "San Francisco",
    "West Covina"];

    var citiesWorld =
    [ "Tokyo",
        "Delhi",
        "Shanghai",
        "Mumbai",
        "Mexico City",
        "São Paulo",
        "Osaka",
        "Cairo",
        "New York City",
        "Beijing",
        "Karachi",
        "Buenos Aires",
        "Istanbul",
        "Lagos",
        "Tianjin",
        "Chennai",
        "Chicago",
        "Bogotá",
        "Los Angeles",
        "Lahore",
        "Rio de Janeiro",
        "Kinshasa",
        "Manila",
        "Jakarta",
        "Bangkok",
        "Moscow",
        "Dhaka",
        "Santiago",
        "Mashhad",
        "Hyderabad",
        "Tehran",
        "Shenzhen",
        "Seoul",
        "Wuhan",
        "Izmir",
        "Quito",
        "Guadalajara",
        "Belo Horizonte",
        "Baghdad",
        "Nairobi",
        "Kolkata",
        "Paris",
        "Lima",
        "Bangalore",
        "Toronto",
        "Ahmedabad",
        "Lisbon",
        "Pune",
        "Chongqing",
        "Cape Town",
        "Brasília",
        "Daegu",
        "Vienna",
        "Madrid",
        "Peshawar",
        "Kabul",
        "Baku",
        "Toronto",
        "Ankara",
        "Luxembourg",
        "San Francisco",
        "Curitiba",
        "Abidjan",
        "Surat",
        "Medellín",
        "Dallas",
        "Hanoi",
        "Sydney",
        "Philadelphia",
        "Shijiazhuang",
        "Xian",
        "Montreal",
        "Barcelona",
        "Houston",
        "Manaus",
        "Melbourne",
        "Toronto",
        "Boston",
        "Phoenix",
        "Fortaleza",
        "New Orleans",
        "Salvador",
        "Seattle",
        "San Diego",
        "Santo Domingo",
        "Guayaquil",
        "Detroit",
        "Yokohama",
        "Belfast",
        "Montreal",
        "Toronto",
        "Milwaukee",
        "Toronto"];


var locationList = citiesUS.concat(citiesWorld);

//import { locationNames } from "./utils";
//var locationList = locationNames;
//console.log(locationList);

//Create a list of options for search using my list of cities
for (let i = 0; i < locationList.length; i++) {
    const listElementValue = locationList[i];
    var listEl = document.createElement('option');
    listEl.setAttribute('value',locationList[i]);
    dataListEl.appendChild(listEl);
}

var usersInputs = loadObjectFromLocalStorage("usersCities");
if(usersInputs === null){
 usersInputs = [];
}
    

//get data from Local storage
function saveObjectToLocalStorage(key, obj){
    localStorage.setItem(key, JSON.stringify(obj));
}

function loadObjectFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}


renderLastViewedCities();

// create users buttons  <button class="btn btn-lg city-btn">New York</button>
function renderLastViewedCities(){
    let lastCities = loadObjectFromLocalStorage("usersCities");
    console.log('loaded array of cities: ' + lastCities);
    if(lastCities !== null) {
    for (let i = 0; i < lastCities.length; i++) {
        var userButtonEl = document.createElement('button');
        userButtonEl.setAttribute('class','btn btn-lg city-btn');
        userButtonEl.setAttribute('id','user-button');
        userButtonEl.textContent = lastCities[i];
        document.getElementById('custom-btn').appendChild(userButtonEl);
        console.log(lastCities[i]);
    }
}

};


var inputValue;


function getApi(inputValue){

 // save user input
 localStorage.setItem("userCityName", inputValue);
 

//get API to fetch lat and lon of input city
var coordinateRequesrURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + inputValue + '&limit=5&appid=c733f29fb2e44ff15762ff2d60996023&units';
fetch(coordinateRequesrURL)
   .then(function (response){
    return response.json();
   })
   .then(function(data){
    console.log(data)
    latOfCity = data[0].lat;
    lonOfCity = data[0].lon;
    console.log(data[0].lat);
    console.log(data[0].lon);


  var requestURL = ('https://api.openweathermap.org/data/2.5/forecast?lat=' + latOfCity + '&lon=' + lonOfCity + '&appid=c733f29fb2e44ff15762ff2d60996023&units=imperial');
  
  fetch(requestURL)
   .then(function (response){
    return response.json();
   })
   .then(function(data){
    console.log(data);
    console.log(data.list[0].main.temp);
    console.log(data.list[0].wind.speed);
    console.log(data.list[0].main.humidity);
    

    //show current day conditions:
    var currentDate = dayjs(data.list[0].dt_txt).format('MM/DD/YYYY'); 
    citiAndDateEl.textContent = data.city.name + " (" + currentDate + ")";

    currentTempEl.textContent = 'Temp: ' + data.list[0].main.temp + ' F';
    currentWindEl.textContent = 'Wind: ' + data.list[0].wind.speed + ' MPH';
    currentHumidityEl.textContent = 'Humidity: ' + data.list[0].main.humidity + ' %';
    

    document.getElementById('day-1-date').textContent = dayjs(data.list[0].dt_txt).format('MM/DD/YYYY');
    document.getElementById('day-1-temp').textContent = 'Temp: ' + data.list[0].main.temp + ' F';
    document.getElementById('day-1-wind').textContent = 'Wind: ' + data.list[0].wind.speed + ' MPH';
    document.getElementById('day-1-hum').textContent = 'Humidity: ' + data.list[0].main.humidity + ' %';

    document.getElementById('day-2-date').textContent = dayjs(data.list[8].dt_txt).format('MM/DD/YYYY');
    document.getElementById('day-2-temp').textContent = 'Temp: ' + data.list[8].main.temp + ' F';
    document.getElementById('day-2-wind').textContent = 'Wind: ' + data.list[8].wind.speed + ' MPH';
    document.getElementById('day-2-hum').textContent = 'Humidity: ' + data.list[8].main.humidity + ' %';

    document.getElementById('day-3-date').textContent = dayjs(data.list[16].dt_txt).format('MM/DD/YYYY');
    document.getElementById('day-3-temp').textContent = 'Temp: ' + data.list[16].main.temp + ' F';
    document.getElementById('day-3-wind').textContent = 'Wind: ' + data.list[16].wind.speed + ' MPH';
    document.getElementById('day-3-hum').textContent = 'Humidity: ' + data.list[16].main.humidity + ' %';

    document.getElementById('day-4-date').textContent = dayjs(data.list[24].dt_txt).format('MM/DD/YYYY');
    document.getElementById('day-4-temp').textContent = 'Temp: ' + data.list[24].main.temp + ' F';
    document.getElementById('day-4-wind').textContent = 'Wind: ' + data.list[24].wind.speed + ' MPH';
    document.getElementById('day-4-hum').textContent = 'Humidity: ' + data.list[24].main.humidity + ' %';

    document.getElementById('day-5-date').textContent = dayjs(data.list[32].dt_txt).format('MM/DD/YYYY');
    document.getElementById('day-5-temp').textContent = 'Temp: ' + data.list[32].main.temp + ' F';
    document.getElementById('day-5-wind').textContent = 'Wind: ' + data.list[32].wind.speed + ' MPH';
    document.getElementById('day-5-hum').textContent = 'Humidity: ' + data.list[32].main.humidity + ' %';

   });

});

}



searchButton.addEventListener('click', function(){
    inputValue = inputEl.value;
    console.log(inputValue);

    console.log("searchButton.addEventListener");
    
    if (usersInputs != null && usersInputs.includes(inputValue)){
        console.log('exist');
    } else {
        usersInputs.push(inputValue);
        var newArray = usersInputs.concat(inputValue);
        console.log('Updated usersInputs:' + usersInputs);
        console.log('new array' + newArray);

        

        saveObjectToLocalStorage("usersCities", usersInputs);
        console.log('JSON to be saved:' + JSON.stringify(usersInputs));
        
    }
    
getApi(inputEl.value);

});


var clickedList;
var buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    clickedList=this.textContent;
    if (clickedList != "Search"){
        console.log(clickedList);
        inputValue = clickedList;
        console.log("I will look weather for: " + inputValue);
        getApi(inputValue)
    }
    
  });
});

