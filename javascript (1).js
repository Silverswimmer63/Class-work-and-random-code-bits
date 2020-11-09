/*--------------- Preset output before we edit anything start ----------------*/

var output = "JavaScript Loading";
document.getElementById("output").innerHTML = output;

/*------------ preset output before we edit end should read "JavaScript Loading"
if this does not show up, and your expected result does not happen, then you
have an issue bellow. --------------------------------------------------------*/



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

document.getElementById("output").innerHTML = output;


/* ------------------------------- End of File -------------------------------*/
function backwardsArray(array) {
  console.log(array.length);
  var keepIndex = array.length;
  var output = [];
  for (var i = 0; i < keepIndex;i++) {
    var pops = array.pop();
    console.log(pops);
    console.log(array);
    output.push(pops);
  console.log(output);
}
  }
  
  class Student{
	constructor(name, age, year, major){
    this.name = name;
    this.age = age;
    this.year = year;
    this.major = major;
}
}
function arrayIntoClass(array) {
    var object = {name:array[0],age:array[1],year:array[2],major:array[3]};
    console.log(object)
    var student = new Student(object.name,object.age,object.year,object.major);
    return student;
}
function changesIn(objOne, objTwo) {
  var changeInX = objTwo.x-objOne.x;
  var changeInY = objTwo.y-objOne.y;
  return {x:changeInX,y:changeInY}
}







