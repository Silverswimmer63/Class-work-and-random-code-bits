function makeComplex(list, maxLen = 5) {
  for (var k = 0; k < list.length;k++) {
        var randMath = Math.floor(Math.random()4)+1;
      var itter = 0;
        while (itter < randMath) {
          var oneFourthChance = [1,2,3,4];
          var doNot = false;
          for (var p = 0; p < 100; p++) {
              var randMaths = Math.floor(Math.random()4);
            //code
          }
                  if (oneFourthChance[randMaths] == 4) {
                      doNot = true;
                  }else{
                   doNot = false;
                  }
          if (doNot === true) {
            list[k] = makeNot(list[k]);
          }
          var oneOrtwo = ["one", "two"];
            var pickRand = Math.floor(Math.random()2);
            var pickLocate = Math.floor(Math.random()list.length);
                //code
          if (oneOrtwo[pickRand] == "one" ) {
            //code
            list[k] = makeAnd(list[k], list[pickLocate]);
          }else if (oneOrtwo[pickRand] == "two") {
            //code
            list[k] = makeOr(list[k], list[pickLocate]);
          }
          itter++;
        }
  }
        return list;
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
