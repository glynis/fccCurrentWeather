/* glyn.is.950: 29.08.2017 - 04.09.2017 */

// get users current location
var x = document.getElementById('city');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "Longitude: " + position.coords.longitude;
}

// place location in html
document.getElementById('city').innerHTML = 'City';

// pull weather information from wunderground
// match conditions and temp with fa-icons
// place fa-icon + temp + location in html

// toggle C + F buttons

/*
conditions: fa-icons
  clear: http://fontawesome.io/icon/sun-o/
  partlycloudy/mostlycloudy: http://fontawesome.io/icon/cloud/
  rain: http://fontawesome.io/icon/tint/
  ?storm: http://fontawesome.io/icon/bolt/
  snow: http://fontawesome.io/icon/snowflake-o/

temperature: fa-icons
  below 0C: http://fontawesome.io/icon/thermometer-empty/
  1C - 10C: http://fontawesome.io/icon/thermometer-quarter/
  11 - 20C: http://fontawesome.io/icon/thermometer-half/
  21C - 30C : http://fontawesome.io/icon/thermometer-three-quarters/
  Above 30F:  http://fontawesome.io/icon/thermometer-full/
*/

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
