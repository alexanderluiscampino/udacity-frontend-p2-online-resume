/* Online Resume
Created by Costas Lymbouris as part of Udacity Course */



/////////////////
//     BIO     //
/////////////////

var bio = {
"characters": [
    /* Each character's Bio will be stored as an object here
       The below is a sample character object generated using addCharacter()
    {
      name: name,
      role: role,
      skills: [skill1, skill2, skill3],
      welcomeMessage: name,
      bioPic: img/usernameShort.png,
      contacts: {
        email: usernameShort@southpark.com,
        github: usernameLong,
        twitter: @usernameLong,
        location: "Colorado, USA"
      }
      markerIcon: img/firstName_marker.png
    }
    */
],
"defaultCharacter": 1, // store the default character to show on first run (Eric)
"addCharacter": function(name, role, skills) { // Create a character object and add it to characters array
  // Create character Object - this will look like the sample character object above
  var character = {};
  // Add Name
  character.name = bio.capitalize(name);
  // Add Role
  character.role = role.toLowerCase();
  // Add Skills
  character.skills = skills;
  // Add Welcome Message
  character.welcomeMessage = character.name;
  // Username Short - used to generate image URL and fake email
  var usernameShort = name.split(" ")[0].toLowerCase();
  // Username Long - used to generate fake github and twitter accounts
  var usernameLong = usernameShort + name.split(" ")[1].toLowerCase();
  // Construct and add image URL - Obviously I have image files with equivalent filenames like img/kenny.png, img/eric.jpg etc.
  character.bioPic = "img/" + usernameShort + ".png";
  // Generate and add Contacts
  character.contacts = {
    "email": usernameShort + "@southpark.com",
    "github": usernameLong,
    "twitter": "@" + usernameLong,
    "location": "Colorado, USA"
  };
  // Construct and add marker Icon URL - Again I have image files like img/kenny_marker.png
  character.markerIcon = "img/" + usernameShort + "_marker.png";
  // Increment the bio global refID and provide a unique ID
  character.refID = ++bio.refID;
  // Add character to Bio Characters array
  bio.characters.push(character);
}, // END of addCharacter function
"capitalize": function(name) { // Take a string and return each word capitalized
  var capitalizedString = "";
  // Create array of words from string
  var words = name.split(" ");
  // Capitalize each word and add to result string
  for(var i = 0; i < words.length; i++) {
    var word = words[i];
    capitalizedString += " " + (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }
  return capitalizedString.trim(); // Clears starting whitespace
}, // END of capitalize function
"display": function() { // display Bio of selectedCharacter
  // Store all HTML code for the Header class in a string
  var HTMLheaderClass = "";
  // Consruct an array that holds all HTML strings for this character's Bio
  var HTMLheader = [];
  // Set displayed character
  var character = bio.displayCharacter;
  // Push formatted HTML sections into Header class
  // Add Bio Pic
  HTMLheader.push(HTMLbioPic.replace("%data%", character.bioPic));
  // Add Welcome Message
  HTMLheader.push(HTMLwelcomeMsg.replace("%data%", character.welcomeMessage));
  // Add Role
  HTMLheader.push(HTMLheaderRole.replace("%data%", character.role));
  // Add Skills
  // Check if character has any skills
  if (character.skills.length > 0) {
    HTMLheader.push(HTMLskillsStart);
    for(skill in character.skills) {
      HTMLheader.push(HTMLskills.replace("%data%", character.skills[skill]));
    }
    HTMLheader.push(HTMLskillsEnd);
  }
  // Convert header array into an HTML string
  HTMLheaderClass = HTMLheader.join("");
  // Replace Header
  $(".header").empty().append(HTMLheaderClass);
  // Add contacts the same way
  var HTMLcontactsClass = "";
  var HTMLcontacts = [];
  // Get first name of character by splitting the string into an array and getting the 0 index
  var firtName = character.name.split(" ")[0];
  // Add first name
  HTMLcontacts.push(HTMLcontactsTitle.replace("%data%", firtName));
  HTMLcontacts.push(HTMLcontactsStart);
  // Add email
  HTMLcontacts.push(HTMLcontactsEmail.replace("%data%", character.contacts.email));
  // Add github
  HTMLcontacts.push(HTMLcontactsGithub.replace("%data%", character.contacts.github));
  // Add twitter
  HTMLcontacts.push(HTMLcontactsTwitter.replace("%data%", character.contacts.twitter));
  HTMLcontacts.push(HTMLcontactsEnd);
  // Convert contacts array into an HTML string
  HTMLcontactsClass = HTMLcontacts.join("");
  // Replace Header
  $(".contacts").empty().append(HTMLcontactsClass);
}, // END of display function
"displayCharacter": {
  // Holds currently displayed character as an object - By default this is the defaultCharacter
},
"refID": -1 // incremented for to generate reference IDs for each character
} //// END of BIO

// Add Bio for each South Park character
/* WARNING: Although the display functions work in any order, the characters need
   to be added in this order! I hard coded array indeces in this order for work, projects & education. */
bio.addCharacter("kenny mcormick", "for the tools others don't like", ["git", "grunt"]);
bio.addCharacter("eric cartman", "enterpreneur", ["kanban", "mgmt"]);
bio.addCharacter("kyle broflovski", "front-end developer", ["html", "css"]);
bio.addCharacter("stan marsh", "front-end developer", ["JS", "jQuery"])



//////////////////
//     WORK     //
//////////////////

var work = {
  "jobs": {
    "character": [
      // the displayCharacter's array of job objects is referenced using bio.displayCharacter.refID
      // 0 - KENNY -- //
      [
        {
          "employer": "The Krazy Kenny Show",
          "title": "Host",
          "location": "Los Angeles, USA",
          "dates": "2000",
          "description": "Mrmph disgustimrrrmph mmmrpph battermrmph acid mmmrrrmph."
        }
      ],
      // 1 - ERIC -- //
      [
        {
          "employer": "Washington Redskins",
          "title": "CEO",
          "location": "Washington, USA",
          "dates": "2014",
          "description": "Created a startup company via kickstarter that does absolutely nothing. The business plan is solid: <strong>Start up, Cash in, Sell out, Bro down</strong>. If you're interesting in buying just tweet."
        },
        {
          "employer": "Old People's Shopping Network (OPSN)",
          "title": "Host",
          "location": "Colorado, USA",
          "dates": "2012",
          "description": "Founded and hosted a home shopping channel in my basement and applied industry-standard manipulation techniques and devious sales methods to sell cheap jewelry at exaggerated prices."
        },
        {
          "employer": "Somalian Pirates, We",
          "title": "Captain",
          "location": "Mogadishu, Somalia",
          "dates": "2009",
          "description": "Picked up important 'pirate' traits and proved my leadership skills, by raiding ships with my crew using a boat I owned called 'Somalian Pirates, We'."
        }
      ],
      // 2 - KYLE
      [
        {
          "employer": "#SaveTheLivingRoom",
          "title": "Creator",
          "location": "Colorado, USA",
          "dates": "2015",
          "description": "It's the holiday season but the good times are ending. Because what matters most isn't what's good, it's what's trending. This younger generation, with their eyes and ears glued, what's trending to them is trenders who trend on YouTube. Comments on commentators it's all changing so fast, playing Xbox with your brother is just a thing of a past. Now with Ma and her iPad and Dad trending or trying, all the family is scattered and the living room's dying. Because it wasn't the outdoors or church or even trips to go ski, what brought families together most was a good old TV. Now we watch things by ourselves and just tweet what we saw, and if you try to complain you get called a... grandpa!<br><br> But now let me tweet <em>this</em> for you all to comment upon, the more connected we get the more alone we become. If you want change like I do and feel the same gloom, then please follow this trend -- <strong>#SaveTheLivingRoom</strong>"
        },
        {
          "employer": "Apple",
          "title": "Developer",
          "location": "Cupertino, USA",
          "dates": "2011",
          "description": "By not reading the Terms and Conditions when agreeing to download my last iTunes update, I was intimately involved in the development of a revolutionary new product called HUMANCENTiPad."
        }
      ],
      // 3 - STAN
      [
        {
          "employer": "Sea Shepherd",
          "title": "Captain",
          "location": "Kii Channel, Japan",
          "dates": "2009",
          "description": "I joined Paul Watson and his crew as an enviromental activist to stop the killing of the world's whales and dolphins. My efforts were covered by the TV show Whale Wars."
        },
        {
          "employer": "Park County",
          "title": "Coach",
          "location": "Colorado, USA",
          "dates": "2006",
          "description": "I did community service by coaching Park County's pee-wee hockey team."
        },
        {
          "employer": "South Park Detective Agency",
          "title": "Creator",
          "location": "Colorado, USA",
          "dates": "2003",
          "description": "Started a successful agency with my friends to solve neighborhood crimes in the South Park area. After solving a series of cases we got promoted to junior deputies by the official police department as a reward for our efforts."
        }
      ]
    ]
  },
  "display": function() {
    // This string will store all HTML code for the Work class
    var HTMLWorkClass = "";
    // Get displayCharacter's refID
    var refID = bio.displayCharacter.refID;
    // Use refID to get displayCharacter's jobs
    var jobs = work.jobs.character[refID];
    // Go through each job
    var jobsLength = jobs.length;
    for(var i = 0; i < jobsLength; i++) {
      // Get job
      var job = jobs[i];
      // Construct an array that holds all HTML strings for this job
      var HTMLjob = [];
      // Push formatted HTML strings into the HTMLjob array
      HTMLjob.push(HTMLsectionDivider);
      HTMLjob.push(HTMLworkEmployer.replace("%data%", job.employer));
      HTMLjob.push(HTMLworkTitle.replace("%data%", job.title));
      HTMLjob.push(HTMLworkLocation.replace("%data%", job.location));
      HTMLjob.push(HTMLworkDates.replace("%data%", job.dates));
      HTMLjob.push(HTMLworkDescription.replace("%data%", job.description));
      // Add job to main HTML Work class string
      HTMLWorkClass += HTMLjob.join("");
    }
    // Replace Work
    $(".work").empty().append(HTMLWorkClass);
  } // END of function
} //// END of WORK



//////////////////
//   PROJECTS   //
//////////////////

var projects = {
  // The projects are shared between all characters since they are working as one team.
  // However they can add their own image for each project which can be referenced by their refID
  // For example Kenny who was refID = 0 will use projects.images[0] for Online Resume
  projects: [
    {
      "title": "Online Resume",
      "dates": "JUL 2015",
      "description": "You'll demonstrate your mastery of the language's syntax through a series of challenges. Each multipart problem mimics a real-life challenge that front-end developers face. You'll be required to write clean code and to apply your knowledge of variables, objects, JSON, functions and control flow to successfully solve the challenges.",
      // [0] image for KENNY, [1] image for ERIC, [2] image for KYLE, [3] image for STAN
      "images": [ "img/kenny_soon.jpg", "img/eric_soon.jpg", "img/kyle_soon.jpg", "img/stan_soon.jpg" ]
    },
    {
      "title": "Arcade Game",
      "dates": "SEP 2015",
      "description": "You will be provided with visual assets and a game loop engine; using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
      "images": [ "img/sp_arcade.png", "img/sp_arcade.png", "img/sp_arcade.png", "img/sp_arcade.png" ]
    },
    {
      "title": "Neighborhood Map",
      "dates": "DEC 2015",
      "description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations.",
      "images": [ "img/sp_map.jpg", "img/sp_map.jpg", "img/sp_map.jpg", "img/sp_map.jpg" ]
    }
  ],
  "display": function() {
    // This string will store all HTML code for the Projects Class
    var HTMLprojectsClass = HTMLprojectsStart;
    // Get displayCharacter ref ID
    var refID = bio.displayCharacter.refID;
    // Go through each project
    var projectsLength = projects.projects.length;
    for(var i = 0; i < projectsLength; i++) {
      // Get project
      var project = projects.projects[i];
      // Create an array that holds all HTML strings for this project
      var HTMLproject = [];
      // Use ref ID to get the character's project image for that project
      var img = project.images[refID];
      // Push formatted HTML sections into the Project class
      HTMLproject.push(HTMLprojectCardImage.replace("%data%", img));
      HTMLproject.push(HTMLprojectCardDescription.replace("%data%", project.description));
      HTMLproject.push(HTMLprojectCardDates.replace("%data%", project.dates));
      HTMLproject.push(HTMLprojectCardTitle.replace("%data%", project.title));
      // Add project to main HTML projects string
      HTMLprojectsClass += HTMLproject.join("");
    }
    // End Projects - This closes the row div
    HTMLprojectsClass += HTMLprojectsEnd;
    // Replace Projects
    $(".projects").empty().append(HTMLprojectsClass);
  } // END of function
} //// END of PROJECTS



/////////////////
//  EDUCATION  //
/////////////////

var education = {
    "schools": {
      // Schools for each character
      "character": [
        // the displayCharacter's array of school objects is referenced using bio.displayCharacter.refID
        // In this case all characters went to the same school so it doesn't really make a difference
        [
          {
            "name": "South Park Elementary",
            "location": "Colorado, USA",
            "degree": "Diploma",
            "majors": "The basic stuff",
            "dates": "1997 - today",
            "url": "http://southpark.wikia.com/wiki/South_Park_Elementary"
          }
        ],
        [
          {
            "name": "South Park Elementary",
            "location": "Colorado, USA",
            "degree": "Diploma",
            "majors": "The basic stuff",
            "dates": "1997 - today",
            "url": "http://southpark.wikia.com/wiki/South_Park_Elementary"
          }
        ],
        [
          {
            "name": "South Park Elementary",
            "location": "Colorado, USA",
            "degree": "Diploma",
            "majors": "The basic stuff",
            "dates": "1997 - today",
            "url": "http://southpark.wikia.com/wiki/South_Park_Elementary"
          }
        ],
        [
          {
            "name": "South Park Elementary",
            "location": "Colorado, USA",
            "degree": "Diploma",
            "majors": "The basic stuff",
            "dates": "1997 - today",
            "url": "http://southpark.wikia.com/wiki/South_Park_Elementary"
          }
        ]
      ]
    },
    "onlineCourses": {
      // Online Course for each character
      "character": [
        // the displayCharacter's array of onlineCourse objects is referenced using bio.displayCharacter.refID
        // 0 - KENNY
        [
          {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
          },
          {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/responsive-images--ud882"
          }
        ],
        // 1 - ERIC
        [
          {
            "title": "How to Build a Startup",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/how-to-build-a-startup--ep245"
          }
        ],
        // 2 - KYLE
        [
          {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
          },
          {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
          }
        ],
        // 3 - STAN
        [
          {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
          },
          {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/intro-to-jquery--ud245"
          }
        ]
      ]
  }, // END of onlineCourses
  "display": function(){
    // Start constructing HTML string to replace Work class
    // The HTML string will store all HTML string for both Schools and Online Courses
    // Schools
    var HTMLeducationClass = HTMLeducationSchoolStart;
    // Get displayCharacter refID
    var refID = bio.displayCharacter.refID;
    // Use refID to get all character's schools
    var schools = education.schools.character[refID];
    // Go through each school
    var schoolsLength = schools.length;
    for(var i = 0; i < schoolsLength; i++) {
      // Get School
      var school = schools[i];
      // Construct an array to store all HMTL strings for this school
      var HTMLschool = [];
      // Push formatted HTML sections into the array
      HTMLschool.push(HTMLsectionDivider);
      HTMLschool.push(HTMLeducationSchool.replace("%data%", school.name));
      HTMLschool.push(HTMLeducationSchoolDegree.replace("%data%", school.degree));
      HTMLschool.push(HTMLeducationSchoolDates.replace("%data%", school.dates));
      HTMLschool.push(HTMLeducationSchoolLocation.replace("%data%", school.location));
      HTMLschool.push(HTMLeducationSchoolMajors.replace("%data%", school.majors));
      // Add to HTML string
      HTMLeducationClass += HTMLschool.join(" ");
    } // END of Schools
    // Online Courses
    HTMLeducationClass += HTMLeducationOnlineCoursesStart + HTMLsectionDivider;
    // Use refID to get all character's online courses
    var onlineCourses = education.onlineCourses.character[refID];
    // Go through each online course
    var onlineCoursesLength = onlineCourses.length;
    for(var i = 0; i < onlineCoursesLength; i++) {
      // Get online course
      var onlineCourse = onlineCourses[i];
      // Construct an array to store all HMTL strings for this online course
      var HTMLonlineCourse = [];
      // Push formatted HTML sections into the online Course class
      HTMLonlineCourse.push(HTMLeducationOnlineCourse.replace("%data%", onlineCourse.title));
      HTMLonlineCourse.push(HTMLeducationOnlineCourseSchool.replace("%data%", onlineCourse.school));
      HTMLonlineCourse.push(HTMLeducationOnlineCourseDates.replace("%data%", onlineCourse.dates));
      HTMLonlineCourse.push(HTMLeducationOnlineCourseURL.replace("%data%", onlineCourse.url));
      // Add to main HTML education class string
      HTMLeducationClass += HTMLonlineCourse.join(" ");
    } // END of Online Courses
    // Replace Education
    $(".education").empty().append(HTMLeducationClass);
  }
} //// END of EDUCATION



//////////////////
//    FOOTER    //
//////////////////

var footer = {
  "currentFooterImage": 1, // Stores current footer image
  "display": function() {
    // This string will store all HTML code for the Footer class
    var HTMLfooterClass = "";
    // Consruct an array that holds all HTML strings for this Bio
    var HTMLfooter = [];
    // Push formatted HTML sections into Header class
    // Footer Start - Starts column
    HTMLfooter.push(HTMLfooterStart);
    // Footer Title
    HTMLfooter.push(HTMLfooterTitle);
    // Footer Text
    HTMLfooter.push(HTMLfooterText);
    // Convert footer array into an HTML string
    HTMLfooterClass = HTMLfooter.join("");
    // Replace Footer
    $("#footerContent").empty().append(HTMLfooterClass);
  }, // END of display function
  "getNextFooterImage": function() {
    // There's 4 footer images named footer1.jpg - footer4.jpg in img/ folder
    var nextFooterImage;
    do {
      // Pick a random number from 1 to 4
      nextFooterImage = (Math.floor(Math.random() * 4) + 1);
    } while (nextFooterImage === footer.currentFooterImage); // make sure it's different from last image

    // Construct image URL
    var footerImageURL = "img/footer" + nextFooterImage + ".jpg";
    // Update current image
    footer.currentFooterImage = nextFooterImage;
    // Return next footer image URL
    return footerImageURL;
  } // END of getNextFooterImage function
} //// END of FOOTER



// display default character to page
setCharacter(bio.defaultCharacter);
// Footer is the same for all characters and only needs to initialize once
footer.display();
// Append Map
$("#mapDiv").append(googleMap);
