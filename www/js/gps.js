var selectedMode, start, end, request;

function GoogleMap()
{
	this.initialize = function()
	{
		var map = showMap();
		//addMarkersToMap(map);
	}
	 
	var showMap = function()
	{
		directionsDisplay = new google.maps.DirectionsRenderer();
		mapOptions = {
			zoom: 1,
			center: new google.maps.LatLng(-33, 151),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(document.getElementById('directions-panel'));
		
		google.maps.event.addListener(directionsDisplay, 'routeindex_changed', function()
		{
			seletedRouteIndex = this.getRouteIndex();
		});
		
		start = 'Avenida da liberdade, lisboa, portugal';
		end = 'Avenida de portugal, belas, portugal';
		request = {
			origin: start,
			destination: end,
			provideRouteAlternatives: true,
			travelMode: google.maps.TravelMode['DRIVING']
		};
		
		directionsService.route(request, function(response, status)
		{
			if (status == google.maps.DirectionsStatus.OK)
			{
				var route = response.routes[0];
				var lat_start = route.legs[0].start_location;
				var len = route.legs.length-1;
				var lat_end = route.legs[len].end_location;

				directionsDisplay.setDirections(response);
				responseFromGoogle = JSON.stringify(response);
			}
		});
		
		return map;
	}
}

var addMarkersToMap = function(map)
{
	var latitudeAndLongitudeOne = new google.maps.LatLng('-33.890542','151.274856');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeOne,
		map: map
	});

	var latitudeAndLongitudeTwo = new google.maps.LatLng('57.77828', '14.17200');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeTwo,
		map: map
	});
}