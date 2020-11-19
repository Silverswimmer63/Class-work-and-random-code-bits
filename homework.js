/*
makeZero(string)

@param string {str}: A string that will have it's o's replaced with 0
@return {str}: A tring with no o's & plenty of 0's
*/

// declare your function here
function makeZero(string) {
  // declare a return string here
  var retSrt = "";
  // loop through the string and look for the letter O, you have to think about
  // how to do this, or you will miss some o's
  for (var i = 0; i < string.length; i++) {
    // check the string at position 'i' and if it is an o, add a 0 to the return string
    if ((string[i] == "o") || (string[i] == "O")) {
      retStr += "0";
      // or else, if it is any other letter, add the letter to the return string
    } else {
      retStr += string[i];
    }
  }
  // return your return string
  return retStr;
}

/*
makePasswordy(string)
We all know that most people just use numbers and a few symobls in place of a couple
of letters. This function will try to emulate that experience.

@param string {str}: A string that will have it's A's replaced with 4, E's with 3
  I's with !'s O wuth 0's and it's U's are turned into (_)
@return {str}: A string with no vowels
*/
// declare your function here
function makePasswordy(string) {
  // declare a return string here
  var retStr = "";
  // loop through the string and look for the letters AEIOU, you have to think about
  // how to do this, or you will miss some vowels's
  for (var i = 0; i < string.length; i++) {
    // check the string at position 'i' and if it is an a, add a 4 to the return string
    if ((string[i] == "a") || (string[i] == "A")) {
      retStr += "4";
      // or else if the string at position 'i' is an e, add a 3 to the return string
    } else if ((string[i] == "e") || (string[i] == "E")) {
      retStr += "3";
      // or else if the string at position 'i' is an i, add a ! to the return string
    } else if ((string[i] == "i") || (string[i] == "I")) {
      retStr += "!";
      // or else if the string at position 'i' is an o, add a 0 to the return string
    } else if ((string[i] == "o") || (string[i] == "O")) {
      retStr += "0";
      // or else if the string at position 'i' is an u, add (_) to the return string
    } else if ((string[i] == "u") || (string[i] == "U")) {
      retStr += "_"
      // or else, any other letter, add the letter to the return string
    } else {
      retStr += string[i];
    }
  }
  // return your return string
  return retStr;
}

/*
casePasswordy(string)
We all know that most people just use numbers and a few symobls in place of a couple
of letters. This function will try to emulate that experience.

@param string {str}: A string that will have it's A's replaced with 4, E's with 3
  I's with !'s O with 0's and it's U's are turned into (_)
@return {str}: A string with no vowels
*/

//string = string.replaceAll("a","4");
//return string;

// declare your function here
function casePasswordy(string) {
  // declare a return string here
  var retStr = "";
  // loop through the string and look for the letters AEIOU, you have to think about
  // how to do this, or you will miss some vowels's
  for (var i = 0; i < string.length; i++) {
    // Look up (and use) case, switch, and default (and break) to copy the functionality of makePasswordy
    switch (string[i]) {
      case "a":
        retStr += "4"
        break;
      case "A":
        retStr += "4"
        break;
      case "e":
        retStr += "3";
        break;
      case "E":
        retStr += "3";
        break;
      case "i":
        retStr += "!";
        break;
      case "I":
        retStr += "!";
        break;
      case "o":
        retStr += "0";
        break;
      case "O":
        retStr += "0";
        break;
      case "u":
        retStr += "_";
        break;
      case "U":
        retStr += "_";
        break;
      default:
        retStr += string[i];
    }
  }
  // return your return string
  return retStr;
}
