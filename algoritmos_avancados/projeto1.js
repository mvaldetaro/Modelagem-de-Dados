let a = [
  2,
  2,
  4,
  2,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  2,
  3,
  4,
  1,
  2,
  3,
  4,
  4,
  2
];
let q = [];
let temp = [];
let i = 1;
let an = a.length;
let qn = q.length;

let meet = true;
let lastIndex = 0;

function isEqual(value) {
  return value === i;
}

do {
  let filtered = a.filter(isEqual);

  if (filtered.length >= 1) {
    temp = temp.concat(filtered);
  } else {
    meet = false;
  }

  i++;
} while (i < a.length);

a = temp;

console.log(a);
