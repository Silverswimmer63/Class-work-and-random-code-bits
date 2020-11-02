
function randomList(length) { //function name with designated perameter
  var list = length;
  for (var i = 0; i < list.length; i++) {
    list;
  }
  for (var i = 0; i < list.length; i++) {
    var retArr = list.splice(Math.floor(Math.random() * list.length));
  }
  console.log(retArr);
}
