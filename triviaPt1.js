var euanTrivia = [{statment: "The sky is yellow", value: false}, {statment: "Memphis is tall", value: false}, {statment: "Euan is bigbrain", value: false}, {statment: "Euan drives a van", value: true}, {statment: "Magenta is the best color", value: true}, {statment: "Disney ruined Star Wars", value: true}, {statment: "Minecraft is the GOAT", value: true}, {statment: "Fortnight is trash", value: true}, {statment: "Aidan can drive", value: false}, {statment: "Zoom is a great learning platform: ", value: false}]

function randomList(lists, length) { //function name with designated perameter
  var itter = length;
  var list = [];
  for (var j = 0; j < itter; j ++ ) {
           list.push(j);
  }
  var splicedstuff = [];
  var index = list.length;
  for (var i = 0; i < index; i++) {
    var randmtah = Math.floor(Math.random() * (list.length));
    var newList = list.splice(randmtah,1);
    var state = lists[newList[0]]
    splicedstuff.push(state);
  }

return splicedstuff;
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
function makeComplex(list, maxLen = 5) {
  for (var k = 0; k < list.length;k++) {
        var randMath = Math.floor(Math.random()*4)+1;
      var itter = 0;
        while (itter < randMath) {
          var oneFourthChance = [1,2,3,4];
          var doNot = false;
          for (var p = 0; p < 100; p++) {
              var randMaths = Math.floor(Math.random()*4);
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
            var pickRand = Math.floor(Math.random()*2);
            var pickLocate = Math.floor(Math.random()*list.length);
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
