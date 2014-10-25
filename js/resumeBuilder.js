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
	   "title" : "adwadwa",
	   "dates" : "asdasdsad",
	   "description" : "asdadadaw"
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
$("#education").append(HTMLschoolStart);
$("#education").append(formattedEduName);
$("#education").append(formattedEduDegree);
$("#education").append(formattedEduDates);
$("#education").append(formattedEduLoc);
$("#education").append(formattedEduMajor);