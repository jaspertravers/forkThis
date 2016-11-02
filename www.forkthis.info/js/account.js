"use strict";



$(window).on("load",function(){
	/* define buttons */
	var biobutton = "#bio";
	var instibutton = "#insti";
	var emailbutton = "#email";
	var websitebutton = "#websites";	
	
	/* set default status of inputs to not editable */
	document.getElementById('bioinput').readOnly = true;
	document.getElementById('instiinput').readOnly = true;
	document.getElementById('emailinput').readOnly = true;
	document.getElementById('websitesinput').readOnly = true;
	
	$(document).ready(function() {
	 $('#bio').on('click', function() {
	  
	  if(document.getElementById('bioinput').readOnly = true){
		document.getElementById('bioinput').readOnly = false;
	    document.getElementById("bio").innerHTML = "Save";
	  }
	  else{
	  
	  document.getElementById('bioinput').readOnly = true;
	  document.getElementById("bio").innerHTML = "Edit";
      }
	 });
	});
	






})