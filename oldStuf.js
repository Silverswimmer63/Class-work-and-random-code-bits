//10/26/20 Work

output = [];
var arrOne = [1,2,3,4,5];
output.push(arrOne.pop());
output.push(arrOne.pop());
output.push(arrOne.pop());
output.push(arrOne.pop());
output.push(arrOne.pop());
//output = arrOne.reverse();

var arrTwo = ["I" + "desire" + "to" + "be" + "a" + "sentence."];
output = arrTwo.join(" ");

var strOne = "I really wish I were an array";
output = strOne.split(" ");
console.log(output);

/*----------------------------------------------------------------------------*/
//10/27/20 Homework

/* Instructions
If we had 2 prototype objects:

startCords = {x:5, y:5};
endCords = {x: 0, y:7};

How would we get the change in x? The change in y?

If I had the array [1,2,3,4]
How would I reverse it and store it in output?

How would you make a class Student who is constructed with name, age, year, and major?

If you had the array studentInfo = [“J.R. Bob Dobbs”, 17, 2021, “Computer Science”]

And you were making a new object of the student class above, named student how
would you use array in making that object?

*/
var startcoords = {x:5, y:5};
var endcoords = {x:0, y:7};
var xchag = Mat.abs(startcoords.x - endcoords.x);
var ychag = Mat.abs(startcoords.y - endcoords.y);

var arr = [1, 2, 3, 4];
output.push(arr.pop());
output.push(arr.pop());
output.push(arr.pop());
output.push(arr.pop());

class Student {
  constructor(name, age, year, major){
    this.name = name;
    this.age = age;
    this.year = year;
    this.major = major;
  }
}

var studentInfo = [];
studentInfo = ["J.R. Bob Dobbs", 17, 2021, "Computer Science"];
var kid = new Student(studentInfo[0], studentInfo[1], studentInfo[2], studentInfo[3]);
// when creating a student, just add these parameters.

/*----------------------------------------------------------------------------*/
// 10/28/20 Class Work



/*----------------------------------------------------------------------------*/

//11/4/20 css
/*
.true{
 transform: translate(330px, 10px);
 background-color: rgb(63, 191, 63);
}
.false{
 transform: translate(10px, -44px);
 background-color: rgb(191, 63, 63);
}
.reset{
 transform: translate(170px, -98px);
 background-color: rgb(191, 191, 63);
}
*/

var euanTrivia = [{statment: "The sky is yellow", value: false}, {statment: "Memphis is tall", value: false}, {statment: "Euan is bigbrain", value: false}, {statment: "Euan drives a van", value: true}, {statment: "Magenta is the best color", value: true}, {statment: "Disney ruined Star Wars", value: true}, {statment: "Minecraft is the GOAT", value: true}, {statment: "Fortnight is trash", value: true}, {statment: "Aidan can drive", value: false}, {statment: "Zoom is a great learning platform: ", value: false}]
