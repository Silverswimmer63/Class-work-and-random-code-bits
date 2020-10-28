/*--------------- Preset output before we edit anything start ----------------*/

var output = "JavaScript Loading";
document.getElementById("feedback").innerHTML = output;
//inner html = everything between the <tag></tag>

/*------------ preset output before we edit end should read "JavaScript Loading"
if this does not show up, and your expected result does not happen, then you
have an issue bellow. --------------------------------------------------------*/

var euanTrivia = [{statment: "The sky is yellow", value: false}, {statment: "Memphis is tall", value: false}, {statment: "Euan is bigbrain", value: false}, {statment: "Euan drives a van", value: true}, {statment: "Magenta is the best color", value: true}, {statment: "Disney ruined Star Wars", value: true}, {statment: "Minecraft is the GOAT", value: true}, {statment: "Fortnight is trash", value: true}, {statment: "Aidan can drive", value: false}, {statment: "Zoom is a great learning platform: ", value: false}]

/*----------------------------------------- Do not make changes below this line
Output command for any changes above. If there are no changes above then it
will read "JavaScript Loading". If there is a change above, then it will output
that change, if there is an error it will output "JavaScript file not loading".
------------------------------------------------------------------------------*/

var styledOutput = "";

if (Array.isArray(output)) {
  for (var i = 0; i < output.length; i++) { styledOutput += output[i] + "<BR>";}
}

if (styledOutput.length != 0) { output = styledOutput; }

document.getElementById("feedback").innerHTML = output;

/* ------------------------------- End of File -------------------------------*/
