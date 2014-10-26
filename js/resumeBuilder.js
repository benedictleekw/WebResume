//$("#main").append("Benedict");
//var email = "cameron@udacity.com";
//var newEmail = email.replace("udacity","gmail");
//console.log(email);
//console.log(newEmail);
//var awesomeThoughts = "My name is Benedict and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);
var bio = { "name" : "Benedict Lee",
			"role" : "Electrical and Computer Engineering Student",
			"contacts" : {
				"mobile" : "614-747-3717",
				"email" : "lee.2138@buckeyemail.osu.edu"
			},
			"welcomeMsg" : "Welcome to my first JS page",
			"skills" : [
			   "stronk", "speedo", "smarte", "beastie"
			   ],
			"bioPic" : "images/fry.jpg"
			};
var work = {
	"jobs": [
	{
		"employer" : "The Ohio State University",
		"title" : "Lab Instructor",
		"location" : "Columbus, Ohio",
		"dates": "September 2014 - Current",
		"description" : "sadsdadsa"
		},
		{
		"employer" : "The Ohio State University",
		"title" : "Research Assistant",
		"location" : "Columbus, Ohio",
		"dates": "May 2012 - Current",
		"description" : "sadsdadsa"
		}
	]
};

//var education = {};
//education["name"] = "The Ohio State University";
//education["years"] = "2012-2014";
//education["city"] = "Columbus";
var education = {
	"schools": [
	  {
		"name" : "The Ohio State University",
		"city" : "Columbus, Ohio",
		"degree" : "BS",
		"major" : "Electrical and Computer Engineering",
		//"startdate" : 2012,
		"date" : "2012-2014",
		"url": "http://www.osu.edu/"
		},
		{
		"name" : "Sunway University",
		"city" : "Subang Jaya, Malaysia",
		"degree" : "American Degree Transfer Program",
		"date" : "2010-2012",
		"url" : "http://sunway.edu.my/university/index.php"
		}
	]
};
	
var projects = {
	"projects": [
	  {
	   "title" : "happy",
	   "dates" : "sad",
	   "description" : "motivation"
	   },
	   {
	   "title" : "adwadwa",
	   "dates" : "asdasdsad",
	   "description" : "asdadadaw"
	   }
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedWelMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
//var formattedEduStart = HTMLschoolStart.replace("%data%", education.schools[0].startdatedate);
var formattedEduName = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedEduDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedEduDates = HTMLschoolDates.replace("%data%", education.schools[0].date);
var formattedEduLoc = HTMLschoolLocation.replace("%data%", education.schools[0].city);
var formattedEduMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#header").append(formattedWelMsg);
$("#header").append(formattedBioPic);
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	}

function displayWork(){
	for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedWorkDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedWorkDate);
	
	var formattedWorkLoc = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLoc);
	
	var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkDescription);
	}
}
displayWork();
function locationizer(work_obj){
	var locationArray = [];
	
	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
		}
		
		return locationArray;
	}
	
projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

	
	
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});
$("#education").append(HTMLschoolStart);
$("#education").append(formattedEduName);
$("#education").append(formattedEduDegree);
$("#education").append(formattedEduDates);
$("#education").append(formattedEduLoc);
$("#education").append(formattedEduMajor);

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
		
	return name[0] +" "+name[1];
	}
$('#main').append(internationlizeButton);