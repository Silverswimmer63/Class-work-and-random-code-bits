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
 i like pi
 */
const keys = document.querySelector('.ultdiv');
var checkedBox = 0.0;

const display = document.querySelector('.display');
const scoreD = document.querySelector('.score');
var dochandeler = document.getElementById("textbox");


var myStatments = [{statement: "Aidan doesn't take physics but acts like he does", bool: true},
                   {statement: "Global warming is a lie", bool: false},
                   {statement: "Bethesda made the biggest flop in gaming history", bool: true},
                   {statement: "PC isn't master race", bool: false},
                   {statement: "Aidan calls any sport with a ball in it sports ball", bool: true},
                   {statement: "Aidan is Extreme big brain", bool: false},
                   {statement: "Komoto best code editor", bool: true},
                   {statement: "Windows 10 is good", bool: false},
                   {statement: "Euan hates on Komoto because why not", bool: true},
                   {statement: "Aidan thinks PC isn't master race", bool: false}];

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
    if (randmtah == previosRand && list.length > 1) {
        while (randmtah == previosRand) {
           randmtah = Math.floor(Math.random() * (list.length));
         }
    }
    var previosRand = randmtah;
    var newList = list.splice(randmtah,1);
    var state = lists[newList[0]];
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
  var keep = [];
  var doNotit = 0;
  var startRand = Math.floor(Math.random()*list.length)
  var start = list[startRand];
  list.splice(startRand, 1);
  var randMath = Math.floor(Math.random()*5);
  if (randMath == 0) {
    randMath+=1;
  }
  console.log(randMath)
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
    if (doNot === true && doNotit == 0) {
      start = makeNot(start);
      doNotit++;
    }
    var oneOrtwo = ["one", "two"];
    var pickRand = Math.floor(Math.random()*2);
    var pickLocate = Math.floor(Math.random()*list.length);
    var useMe = list.splice(pickLocate,1);
    //code
    if (oneOrtwo[pickRand] == "one" ) {
      start = makeOr(start, useMe[0]);
    }else if (oneOrtwo[pickRand] == "two") {
      //code
      start = makeOr(start, useMe[0]);
    }
    itter++;
    }
    return start;
}

var statements = randomList(myStatments, myStatments.length);
var stateArr = makeComplex(statements);
var indexS = 0;
var score= 0;
scoreD.textContent = "Score : " + score;
display.textContent = stateArr.statement;
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayed = display.textContent;
    //reset simply resets the page
    if (action === "reset") {
      location.reload()
    }
    if (action === "true") {
      if (stateArr.bool === true) {
        score += 5;
      }else{
        score -= 5;
      }
        statements = randomList(myStatments, myStatments.length);
        stateArr = makeComplex(statements);
       display.textContent = stateArr.statement;
    }
    if (action === "false") {
      if (stateArr.bool === false) {
        score+=5;
      }
      else{
        score-=5;
      }
        statements = randomList(myStatments, myStatments.length);
        stateArr = makeComplex(statements);
       display.textContent = stateArr.statement;
    }
    scoreD.textContent = "Score : " + score;
  }
})

/*Add name

*/
