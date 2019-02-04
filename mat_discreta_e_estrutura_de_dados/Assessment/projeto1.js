var all = [];
var ml = [];
var es = [];
var bd = [];

function feedArray(size) {
  var arr = [];
  for (let index = 0; index < size; index++) {
    arr.push(index);
  }
  return arr;
}

all = feedArray(1200);

console.log(all);