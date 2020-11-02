
function randomList(length) { //function name with designated perameter
  var itter = length;
  var list = [];
  for (var j = 0; j < itter.length; j++) {
    list.push(j);
  }
  console.log(list);
  var spliced = [];
  var index = list.length;
  for (var i = 0; i < list.length; i++) {
    var randMath = Math.floor(Math.random() * (list.length - 1));
    var newList = list.splice(randMath, 1);
    spliced.push(newList[0]);
  }
  return spliced;
}
