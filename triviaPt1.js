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
const keys = document.querySelector('.ultdiv');
var checkedBox = 0.0;

const display = document.querySelector('.display');
const scoreD = document.querySelector('.score');
console.log(display.textContent)
var dochandeler = document.getElementById("textbox");


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
var statements = randomList(myStatments, myStatments.length);
var stateArr = makeComplex(statements);
var indexS = 0;
var score= 0;
scoreD.textContent = "Score : " + score;
display.textContent = stateArr[0].statement;
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
      if (stateArr[indexS].bool === true) {
        score += 5;
      }else{
        score -= 5;
      }
      indexS++;
       display.textContent = stateArr[indexS].statement;
      if(indexS == stateArr.length-1){
        indexS = 0;
        statements = randomList(myStatments, myStatments.length);
        stateArr = makeComplex(statements);

      }
    }
    if (action === "false") {
      if (stateArr[indexS].bool === false) {
        score+=5;
      }
      else{
        score-=5;
      }
      indexS++;
       display.textContent = stateArr[indexS].statement;
             if(indexS == stateArr.length-1){
        indexS = 0;
        statements = randomList(myStatments, myStatments.length);
        stateArr = makeComplex(statements);

      }

    }
    scoreD.textContent = "Score : " + score;
  }
})
