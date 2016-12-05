//get user coords
//request weather using the user coords
//display weather details on screen

//ready function starts
$(document).ready(function() {
  $("#mapMarker").addClass("animated bounce");
  //get the user's coords
  $.getJSON("http://ip-api.com/json", function(data1) {
    var loc = data1.city + "," + data1.countryCode;

    //request weather using the user's city and country
    //display on weather details 
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&units=metric&appid=bc9254968390068488d4a30f8919421a&appid=bc9254968390068488d4a30f8919421a", function(data2) {
      $("#cityName").html(data2.name + ", " + data2.sys.country);
      $("#description").html(data2.weather[0].description);
      $("#temp").html(data2.main.temp);
      $("#humidity").html(data2.main.humidity + " %");
      $("#windSpeed").html(data2.wind.speed);
      $("#clouds").html(data2.clouds.all + " %");
      $("#coords").html(data2.coord.lat + " °N " + data2.coord.lon + " °E ");
      
      //different images for different weather conditions
      var imgArr = {
        "Atmosphere": "https://s19.postimg.org/vzfcifxnn/Atmosphere.jpg",
        "Calm": "https://s19.postimg.org/ht470yc6b/p_Pq_MJVH.jpg",
        "Snow": "https://s19.postimg.org/inm598un7/Snow.jpg",
        "Clouds": "https://s19.postimg.org/yr37mslk3/u_Cg_Zr_Xr_jpg.png",
        "Clear": "https://s19.postimg.org/yflra1543/Clear.jpg",
        "Rain": "https://s19.postimg.org/wxvpkqazn/Fc_OVpy_Fl22.jpg",
        "Drizzle": "https://s19.postimg.org/vp7tz3j1f/Drizzle.jpg",
        "Thunderstorm": "https://s19.postimg.org/4igc7fllv/Thunderstorm.jpg",
        "Extreme": "https://s19.postimg.org/swemf2ioz/Extream.jpg"
      };

      var dsc = data2.weather[0].main;
      $("#location").css("background-image", "url(" + imgArr[dsc] + ")");

    });// function data2 ends
  });// function data1 ends
  
  //temperature unit converter
    $("#tempRow").on("click", function(){
      var units= document.getElementById("celsius").innerHTML;
      var temp= document.getElementById("temp").innerHTML;
      var newTemp = 0;
      
      if(units === "°C") {
        $("#celsius").text("°F");
        newTemp = ((9/5) * temp + 32);
      }         
      
      if(units === "°F") {
        $("#celsius").text("°C");
        newTemp = ((temp - 32) * (5/9));  
        } 
      $("#temp").text(newTemp.toFixed(1));
      }); 
  
  /*windspeed unit converter
  $("#windSpeedRow").on("click", function(){
    var windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);
    var windSpeedUnit = document.getElementById("windSpeedUnit").innerHTML;
    var newWindSpeed = 0;
    
    if (windSpeedUnit == "kph") {
      $("#windSpeedUnit").text("mph");
      newWindSpeed = (windSpeed * 1.6);  
    }
     if (windSpeedUnit == "mph") {
      $("#windSpeedUnit").text("kph");
      newWindSpeed = (windSpeed / 1.6);   
    }
    $("#windSpeed").text(newWindSpeed.toFixed(1)); 
  });
        */
 
  

}) // ready function ends