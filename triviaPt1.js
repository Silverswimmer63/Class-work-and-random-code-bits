/*
 Memphis:
Aidan doesn’t take physics but acts like he does: T
Global warming is a lie: F
Bethesda made the biggest flop in gaming history:T
PC isn’t master race: F
Aidan calls any sport with a ball in it sports ball:T
Aidan thinks PC isn’t master race:F
Aidan is Extreme big brain:F
Komoto best code editor:T
Windows 10 is good:F
 Euan hates on Komoto because why not:T
 */
var myStatments = [{statement: "Aidan doesn't take physics but acts like he does", value: true},
                   {statement: "Global warming is a lie", value: false},
                   {statement: "Bethesda made the biggest flop in gaming history", value: true},
                   {statement: "PC isn't master race", value: false},
                   {statement: "Aidan calls any sport with a ball in it sports ball", value: true},
                   {statement: "Aidan is Extreme big brain", value: false},
                   {statement: "Komoto best code editor", value: true},
                   {statement: "Windows 10 is good", value: false},
                   {statement: "Euan hates on Komoto because why not", value: true},
                   {statement: "Aidan thinks PC isn't master race", value: false}];

function randomList(lists, length) { //function name with designated perameter
  var itter = length; // create a variable to work with the raw imput
  var list = []; // make a blank array to store things in
  for (var j = 0; j < itter; j ++ ) { // loop to put the parts of the initial value in the blank variable
           list.push(j); // add the parts of itter to list
  }
  var splicedstuff = []; // new array to store the spliced stuff
  var index = list.length; // make a variable to get the length of list
  for (var i = 0; i < index; i++) { // loop to splice things with
    var randmtah = Math.floor(Math.random() * (list.length)); // getting a random index to move arround
    var newList = list.splice(randmtah,1); // splicing a the just found spot
    var state = lists[newList[0]] // adding the spliced item to the begining of an array
    splicedstuff.push(state); // adding the spliced thongs to a blank array
  }

return splicedstuff; // returning the finished product
}

function makeAnd(first, second) {
    //code
    var statementNew = {statement:first.statement + " and " + second.statement,bool:false};
    if (first.bool && second.bool) {
        statementNew.bool = true;
        return statementNew;
    }
    else{
      return statementNew;
    }
}

function makeOr(first, second) {
    var statementNew = {statement:first.statement + " or " + second.statement,bool:false};
    if (first.bool || second.bool) {
        statementNew.bool = true;
        return statementNew;
    }
    else {
      return statementNew;
    }
}

function makeNot(object) {
    var statementNew = {statement:"",bool:!object.bool};
    statementNew.statement += "It is not the case that, " + object.statement;
    return statementNew;
}

function makeComplex(list, maxLen = 5) { // make the function that takes the list of statments and makes a sentince with a max length of 5
  for (var k = 0; k < list.length;k++) { // begin a loop to create the final statment
      var randMath = Math.floor(Math.random()*4)+1; // create a random number generator that outputs a number between 1 and 4 to decide the number of statments in a sentince
      var itter = 0; // make a variable to track the number of statments in the final sentince
      while (itter < randMath) { // check to see if we can add another statment baised on the random number that was generated in randMath
        var oneFourthChance = [1,2,3,4]; // create a var to add the 25% chance of neggation
        var doNot = false; // make a var that tracks wether or not the negation will happen, false by default
        for (var p = 0; p < 100; p++) { // begin a loop to check the activation of the negation
            var randMaths = Math.floor(Math.random()*4); // creates the 25% chance of the neagation
        }
        if (oneFourthChance[randMaths] == 4) { // checks if the negation happened
          doNot = true; // if it happens, set the negaton tracker to true
        }else{
          doNot = false; // if no, leave the netation tracker as false
        }
        if (doNot === true) { // if the nagation happens, add the negation using makeNot
          list[k] = makeNot(list[k]);
        }
        var oneOrtwo = ["one", "two"]; // Make an array with two items
        var pickRand = Math.floor(Math.random()*2); // randomly chose one of the two items from above
        var pickLocate = Math.floor(Math.random()*list.length); // randomly chose a location in the list to add the and/or
        // create an if statment for makeAnd and makeOr and add to list the statment
        if (oneOrtwo[pickRand] == "one" ) {
          //code
          list[k] = makeAnd(list[k], list[pickLocate]);
        }else if (oneOrtwo[pickRand] == "two") {
          //code
          list[k] = makeOr(list[k], list[pickLocate]);
        }
        itter++; // progress forward in the for loop towards the max length
      }
  }
  return list; // end the functiooooooon
}
