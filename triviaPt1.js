function randomList(length) { //function name with designated perameter
  var itter = length; // Take the raw imput and turinit into a variable to be worked with`
  var list = []; // Create a blank array to store things in
  for (var j = 0; j < itter; j ++ ) { // loop to put the parts of the initial value in the blank variable
    list.push(j); // add the parts of itter to list
  }
  var splicedstuff = []; // new array to store the spliced stuff
  var index = list.length; // make a variable to get the length of list
  for (var i = 0; i < index; i++) { // loop to splice thongs with
    var randmtah = Math.floor(Math.random() * (list.length)); // getting a random index to move arround
    var newList = list.splice(randmtah,1); // splicing a the just found spot
    splicedstuff.push(newList[0]); // adding the spliced thongs to a blank array
  }
return splicedstuff; // returning the finished product
}

function makeComplex(list, maxlen = 5) {

}
//boi
