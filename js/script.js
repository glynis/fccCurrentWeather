/* glyn.is.950: 29.08.2017 - 05.09.2017 */

$(document).ready(function(){

// GET LOCATION
$.getJSON("http://freegeoip.net/json/", function(data) {
    var country = data.country_name;
    var latitude = data.latitude;
    var longitude = data.longitude;
});

// PLACE LOCATION
$.get("http://freegeoip.net/json/", function (response) {
  $("#city").html(response.city + ", " + response.region_name);
  var searchQuery = (response.region_code + "/" + response.city + ".json/");
// PULL WEATHER INFO
  $.ajax({
    url : "http://api.wunderground.com/api/9273aaedb10bc501/conditions/q/" + searchQuery,
//    dataType : json,
    success : function(data) {
      var current = data[1][31];
      $('#conditions').html(current);
    }
  });
//  $("#test").html(searchQuery);
});

// $('#conditions').html('partlycloudy');
$('#temperature').html('26');

// MATCH CONDITIONS
var cond = "partlycloudy";
if (cond == "clear") {
    $('#icond').html('<i class="fa fa-sun-o"></i>');
  } else if (cond == "partlycloudy") {
    $('#icond').html('<i class="fa fa-cloud"></i>');
  } else if (cond == "rain") {
    $('#icond').html('<i class="fa fa-tint"></i>');
  } else if (cond == "snow") {
    $('#icond').html('<i class="fa fa-snowflake-o"></i>');
  } else {
    $('#icond').html('<i class="fa fa-question"></i>');
}

var tempC = "26";
if (tempC <= 0) {
    $('#itemp').html('<i class="fa fa-thermometer-empty"></i>');
  } else if (tempC >= 1 && tempC <= 10) {
    $('#itemp').html('<i class="fa fa-thermometer-quarter"></i>');
  } else if (tempC >=11 && tempC <= 20) {
    $('#itemp').html('<i class="fa fa-thermometer-half"></i>');
  } else if (tempC >= 21 && tempC <=30) {
    $('#itemp').html('<i class="fa fa-thermometer-three-quarters"></i>');
  } else if (tempC >= 31) {
    $('#itemp').html('<i class="fa fa-thermometer-full"></i>');
  } else {
    $('#itemp').html('<i class="fa fa-question"></i>');
}

/* storm: http://fontawesome.io/icon/bolt/ */

// PLACE CONDITIONS
// C-F TOGGLE
});


/* notes from weatherGeeklet ~2014 .sh .py

http://api.wunderground.com/auto/wui/geo/WXCurrentObXML/index.xml?query=BDL
weather=$(cat weather.xml | grep '<icon>' | tr -d '\t' | python grabIcon.py )

iconString = sys.stdin.read()
  print(iconString[6:-9])

echo $weather
	file="$weather.png"
	if [ -s "current.png" ]; then
	rm current.png
	fi
	cp $file current.png

*/


/* json get location notes

 getJSON("http://freegeoip.net/json/", function(data) {
     var latitude = data.latitude;
     var longitude = data.longitude;
     alert("Latitude: " + latitude);
     alert("Longitude: " + longitude);
 });

 use wunderground api to get icon name + temp
 (document).ready(function($) {
		$.ajax({
			url : "http://api.wunderground.com/api/YOURAPIKEY/forecast/q/IA/Cedar_Rapids.json",
			dataType : "jsonp",
			success : function(parsed_json) {
				var v1 = parsed_json['forecast']['txt_forecast']['forecastday'];
				for (index in v1) {
					alert('Weather forecast for '+v1[index]['title']+' is '+v1[index]['fcttext_metric']);
        console.log(v1);
        }
			}
		});
	});
*/
