const treeBin = {};
const lista = [
  0,
  1,
  2,
  3,
  4,
  5
];

function insertInTree(tree, val) {
  if (tree.value) {
    if (val > tree.value) {
      insertInTree(tree.right, val)
    } else {
      insertInTree(tree.right, val)
    }
  } else {
    tree.value = val
    tree.right = {}
    tree.left = {}
  }
}

for (i = 0; i < lista.length; i++) {
  insertInTree(treeBin, lista[i]);
}

console.log(JSON.stringify(treeBin));