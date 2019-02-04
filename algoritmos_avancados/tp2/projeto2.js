const NVM = 3001;
const PM = 100000;

function aresta(u, v, p) {
  return {u, v, p}
}

var n,
  m,
  nt,
  ct = 0;
var Pai = [];
var E = [
  aresta(1, 2, 5),
  aresta(1, 3, 3),
  aresta(4, 1, 6),
  aresta(2, 4, 7),
  aresta(3, 2, 4),
  aresta(3, 4, 5)
];
var T = [];

function compara(e, f) {
  return e.p > f.p
}

function ufFind(p) {
  if (Pai[p] != p) {
    Pai[p] = ufFind(Pai[p]);
    return Pai[p];
  }
}

function ufUnion(p, q) {
  if (Pai[p] > Pai[q]) {
    Pai[Pai[p]] = Pai[q];
  } else {
    Pai[Pai[q]] = Pai[p];
  }
}

function Kruskal() {

  E.sort(compara);

  for (let i = 1; i < n; i++) {
    Pai[i] = i;
  }

  for (let i = 1; i < m; i++) {

    ufFind(E[i].u);
    ufFind(E[i].v);

    if (Pai[E[i].u] != Pai[E[i].v]) {
      ufUnion(E[i].u, E[i].v);

      nt++;
      T[nt] = E[i - 1];

      ct = ct + T[nt].p
    }
  }

  return ct;
}

function main() {
  var mmax;

  n = 4;
  m = 6;

  console.log("n: " + n);
  console.log("m: " + m);

  console.log(E);

  nmax = (n * (n - 1)) / 2;

  if (!n || n < 2 || n > NVM || m < 1 || m > mmax) {
    console.log("Erro, restrição violada");
  } else {

    for (i = 1; i < m; i++) {
      if (E[i].u < 1 || E[i].v < 1 || E[i].u > n || E[i].v > n || E[i].p > PM) {
        console.log("Erro, restrição violada");
      }
    }

    console.log('Resultado: ' + Kruskal());
  }

}

main();