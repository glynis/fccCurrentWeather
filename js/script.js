/* glyn.is.950: 29.08.2017 - 05.09.2017 */
$(document).ready(function(){
    // GET LOCATION
    $.get("http://freegeoip.net/json/", function (response) {
        $("#city").html(response.city + ", " + response.region_name);
        var searchQuery = (response.region_code + "/" + response.city + ".json");
        // GET WEATHER FOR THIS LOCATION
        $.ajax({
   		    url : "http://api.wunderground.com/api/9273aaedb10bc501/conditions/q/" + searchQuery,
		    dataType : "jsonp",
		    success : function(data) {
		        var conditions = data.current_observation.weather;
		        var icon = data.current_observation.icon;
                var tempC = data.current_observation.temp_c;

                $('#conditions').html(conditions);
                $('#temperature').html(tempC);

                // MATCH CONDITIONS
                if (icon == "clear") {
                    $('#icond').html('<i class="fa fa-sun-o"></i>');
                } else if (icon == "partlycloudy") {
                    $('#icond').html('<i class="fa fa-cloud"></i>');
                } else if (icon == "rain") {
                    $('#icond').html('<i class="fa fa-tint"></i>');
                } else if (icon == "snow") {
                    $('#icond').html('<i class="fa fa-snowflake-o"></i>');
                } else {
                	console.log("Unrecognized icon: \"" + icon + "\"")
                    $('#icond').html('<i class="fa fa-question"></i>');
                }

				// MATCH TEMPERATURE
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

            }
        });
    });
});
