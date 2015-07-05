// BIO - Header
var HTMLbioPic = '<div class="col s12 m4 center"><img src="%data%" class="bioPic"></div>';
var HTMLwelcomeMsg = '<div id="welcomeMessage" class="col s12 m8 center-align"><h2 class="white-text">%data%</h2>';
var HTMLheaderRole = '<h5 class="white-text">%data%<h5></div>';

// BIO - Contacts
var HTMLcontactsTitle = '<div class="col s12"><h4 class="white-text">Connect with %data%</h4></div>' +
                        '<div class="col s12"><div class="divider"><br></div></div>' +
                        '<div class="col s12"><br></div>';
var HTMLcontactsStart = '<ul class="white-text">';
var HTMLcontactsEmail = '<li>email<a href="#" class="cyan-text lighten-5 hoverable"> %data% </a>/ </li>';
var HTMLcontactsGithub = '<li>github<a href="#" class="cyan-text lighten-5 hoverable"> %data% </a>/ </li>';
var HTMLcontactsTwitter = '<li>twitter <a href="#" class="cyan-text lighten-5 hoverable"> %data% </a></li>';
var HTMLcontactsEnd = '</ul>';

// SKILLS
var HTMLskillsStart = '<div class="col s12"><div class="divider"><br></div><div class="section">';
var HTMLskills = '<div class="col s6 m4 l3 center-align">' +
                 '<a href="#" class="waves-effect waves-light btn black-text amber accent-2">%data%</a></div>';
var HTMLskillsEnd = '</div></div>';

// WORK
var HTMLworkEmployer = '<div class="col s12 flow-text"><br>%data% - ';
var HTMLworkTitle = '%data%</div>';
var HTMLworkDates = '<div class="date-text grey-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text grey-text">%data%</div>';
var HTMLworkDescription = '<div class="col s12"><p><br>%data%</p></div>';

// PROJECTS
var HTMLprojectsStart = '<div class="row">';
var HTMLprojectCardImage = '<div class="col s12 m6 l4"><div class="card teal darken-1"><div class="card-image">' +
                           '<img src="%data%" alt="Project Image"></div>';
var HTMLprojectCardDescription = '<div class="card-content white-text thin"><p>%data%</p></div>';
var HTMLprojectCardDates = '<div class="card-action teal darken-3"><span class="yellow-text">%data%</span>';
var HTMLprojectCardTitle = '<span class="right white-text">%data%</span></div></div></div>';
var HTMLprojectsEnd = '</div>';


// EDUCATION - Schools
var HTMLeducationSchoolStart ='<div class="col s12"><h5>Schools</h5></div>';
var HTMLeducationSchool = '<div class="col s12 flow-text"><br>%data% - ';
var HTMLeducationSchoolDegree = '%data%</div>';
var HTMLeducationSchoolDates = '<div class="date-text grey-text">%data%</div>';
var HTMLeducationSchoolLocation = '<div class="location-text grey-text">%data%</div>';
var HTMLeducationSchoolMajors = '<div class="col s12"><p><strong>Majors:</strong> %data%</p></div>';

// EDUCATION - Online Courses
var HTMLeducationOnlineCoursesStart ='<div class="col s12"><br><h5>Online Courses</h5></div>';
var HTMLeducationOnlineCourse = '<div class="col s12 flow-text"><br>%data% - ';
var HTMLeducationOnlineCourseSchool = '%data%</div>';
var HTMLeducationOnlineCourseDates = '<div class="date-text grey-text">%data%</div>';
var HTMLeducationOnlineCourseURL = '<div class="col s12"><a href="#">%data%<br></a></div>';

// FOOTER - Main
var HTMLfooterStart = '<div class="col s12 m9 right">';
var HTMLfooterTitle = '<h2 id="footer-title" class="thin">Hello world,</h2>';
// This looks like a mess but I couldn't figure out a nice way to abstract it. The content is static so no %data% replacements here
var HTMLfooterText = '<p id="footer-text" class="thin">I\'m' +
                     '<a href="https://github.com/d3moid" target="_blank" class="flow-text teal lighten-5 black-text hoverable"> d3moid </a>. ' +
                     'The Online Resume Project was made as part of a' +
                     '<a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" class="flow-text orange lighten-5 black-text hoverable" target="_blank"> nanodegree </a>' +
                     'by Udacity. This is beginner\'s code. It\'s built on top of' +
                     '<a href="https://github.com/udacity/frontend-nanodegree-resume" class="flow-text orange lighten-5 black-text hoverable" target="_blank"> the original </a>' +
                     'utilizing no more than what\'s taught up to Project 2.<br><br>Are you a student and <span class="heart-shape"></span>this?' +
                     '<a href="https://github.com/d3moid/online-resume" target="_blank" class="flow-text yellow lighten-5 black-text hoverable"> Fork the code </a>to see how easy it is!</p>';
var HTMLfooterEnd = '</div>';

// FOOTER - Image
var HTMLfooterImage = '<img src="%data%" class="responsive-img right" alt="footer image">';

// OTHER
var HTMLsectionDivider = '<div class="col s12"><div class="divider"><br></div></div>';
var googleMap = '<div id="map"></div>';

// MY CUSTOM STUFF

// DISPLAY A CHARACTER
function setCharacter(refID) {
  // Change displayCharacter to character's refID
  bio.displayCharacter = bio.characters[refID];
  // Call all display methods
  bio.display();
  work.display();
  projects.display();
  education.display();
}

// NAVIGATION
$("#kenny").click(function() {
  // this is Kenny's hard coded reference ID
  setCharacter(0);
  // initializeMap to update markers and locations
  initializeMap();
});
$("#eric").click(function() {
  setCharacter(1);
  initializeMap();
});
$("#kyle").click(function() {
  setCharacter(2);
  initializeMap();
});
$("#stan").click(function() {
  setCharacter(3);
  initializeMap();
});
// Triggers Footer modal
$(".about").click(function() {
      // Generate random footer Image URL
      var footerImageURL = footer.getNextFooterImage();
      // Format URL
      var HTMLstring = HTMLfooterImage.replace("%data%", footerImageURL);
      // Replace Footer Image
      $("#footerImage").empty().append(HTMLstring);
});
// Set navigation item to active when clicked
$("li").click(function() {
    // remove classes from all
    $("li").removeClass("active");
    $(this).addClass("active");
});

// Materialize Framework - Initialize footer modal
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});

// END of MY CUSTOM STUFF

// Log Clicks
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  var coordinates = 'X ' + x + ',  Y ' + y;
  // Pop toast along with logging on console (optional - for review only)
  // Materialize.toast(coordinates, 1500);
  console.log(coordinates);
}

$(document).click(function(loc) {
   logClicks(loc.pageX, loc.pageY);
});


// Google Map //

var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    /* Enables/disables all default UI. May be overridden individually. */
    disableDefaultUI: true,
    // This is to prevent accidentally zooming while scrolling the page
    scrollwheel: false,
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  // Construct Map
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];
    // Get displayed character's refID
    var refID = bio.displayCharacter.refID;

    // BIO LOCATIONS
    // Use refID to get location from contacts
    var locationBio = bio.characters[refID].contacts.location;
    // Add contacts location to locations array
    locations.push(locationBio);

    // JOB LOCATIONS
    // Use refID to get the number of jobs the character has
    var jobsLength = work.jobs.character[refID].length;
    // Go through each job
    for(var i = 0; i < jobsLength; i++) {
      // Add job location to locations array
      locations.push(work.jobs.character[refID][i].location);
    }

    // SCHOOL LOCATIONS
    // Use refID to get the number of schools the character went
    var schoolsLength = education.schools.character[refID].length;
    // Go through each school
    for(var j = 0; j < schoolsLength; j++) {
      // Add school location to locations array
      locations.push(education.schools.character[refID][j].location);
    }
    // Return all locations as ["City, Country", ..., "City, Country"]
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */

  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    // Get display character refID
    var refID = bio.displayCharacter.refID;
    // Use refID to get map icon for displayed character
    var markerIcon = bio.characters[refID].markerIcon;
    var marker = new google.maps.Marker({
      map: map,
      // Add marker icon here
      icon: markerIcon,
      position: placeData.geometry.location,
      title: name
    });
    // This is just for debugging and to control the map from the functions - will remove
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.

    var infoWindow = new google.maps.InfoWindow({
      // Display location name
      content: name
    });

    // On mouse over open the infoWindow
    google.maps.event.addListener(marker, 'mouseover', function() {
        infoWindow.open(map,marker);
    });
    // On mouse out close the infoWindow
    google.maps.event.addListener(marker, 'mouseout', function() {
        infoWindow.close(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});
