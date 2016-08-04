var db = null;
var children = null;
var directionsService = new google.maps.DirectionsService();
var seletedRouteIndex = 0;
var directionsDisplay, responseFromGoogle, map, mapOptions;

var welcomescreen_slides = [
  {
    id: 'slide0',
    picture: '<div class="tutorialicon">♥</div>',
    text: 'Welcome to this tutorial. In the next steps we will guide you through a manual that will teach you how to use this app.'
  },
  {
    id: 'slide1',
    picture: '<div class="tutorialicon">✲</div>',
    text: 'This is slide 2'
  },
  {
    id: 'slide2',
    picture: '<div class="tutorialicon">♫</div>',
    text: 'This is slide 3'
  },
  {
    id: 'slide3',
    picture: '<div class="tutorialicon">☆</div>',
    text: 'Thanks for reading! Enjoy this app.<br><br><a href="#" class="tutorial-close-btn close-welcomescreen">End Tutorial</a>'
  }
];

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        /*var idbAdapter = new LokiIndexedAdapter('lavinci');
		db = new loki('lavdevnet', { persistenceMethod: 'adapter', adapter: idbAdapter });
		children = db.addCollection('children');*/
    },
	
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
	
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		var myapp = new Framework7();
		var options = {
		  'bgcolor': '#0da6ec',
		  'fontcolor': '#fff'
		}
		var welcomescreen = myapp.welcomescreen(welcomescreen_slides, options);
		
		var map = new GoogleMap();
		map.initialize();
    },
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};

var InsertLoki = function() {
	localforage.clear(function(err) {
	    // Run this code once the database has been entirely deleted.
	    console.log('Database is now empty.');
	});

	localforage.setItem('lokitest', document.getElementById("lokitest").value, function(err, value) {
	    // Do other things once the value has been saved.
	    console.log(value);
	    document.getElementById("lokitest").value = '';
	});
}

var LoadLoki = function() {
	localforage.getItem('lokitest', function(err, val) {
		document.getElementById("lokitest").value = val;
	});
}

function showLocation()
{
	navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);
}

function onLocationSuccess(position)
{
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	alert("lat : " + lat + "\n lng : " + lng);
}

function onLocationError(error)
{
	alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}