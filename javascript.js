/*--------------- Preset output before we edit anything start ----------------*/

var output = "JavaScript Loading";
document.getElementById("feedback").innerHTML = output;
//inner html = everything between the <tag></tag>

/*------------ preset output before we edit end should read "JavaScript Loading"
if this does not show up, and your expected result does not happen, then you
have an issue bellow. --------------------------------------------------------*/

/*output = [];
var arrOne = [1,2,3,4,5];
output.push(arrOne.pop());
output.push(arrOne.pop());
output.push(arrOne.pop());
output.push(arrOne.pop());
output.push(arrOne.pop());
//output = arrOne.reverse();
*/


var arrTwo = ["I" + "desire" + "to" + "be" + "a" + "sentence."];
output = arrTwo.join(" ");



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
