const grafo = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
];

const INFO = Number.MAX_SAFE_INTEGER;

const distanciaMIn = (distancia, visitado) => {
  let min = INFO;
  let minIndex = -1;
  for (let i = 0; i < distancia.length; i++) {
    if (visitado[i] === false && distancia[i] <= min) {
      min = distancia[i];
      minIndex = i;
    }
  }
  return minIndex;
};
const dijkstra = (grafo, src) => {
  const distancia = [];
  const visitado = [];
  const length = grafo.length;
  for (let i = 0; i < length; i++) {
    distancia[i] = INFO;
    visitado[i] = false;
  }
  distancia[src] = 0;
  for (let i = 0; i < length - 1; i++) {
    const u = distanciaMIn(distancia, visitado);
    visitado[u] = true;
    for (let v = 0; v < length; v++) {
      if (
        !visitado[v] &&
        grafo[u][v] !== 0 &&
        distancia[u] !== INFO &&
        distancia[u] + grafo[u][v] < distancia[v]
      ) {
        distancia[v] = distancia[u] + grafo[u][v];
      }
    }
  }
  return distancia;
};

const go = dijkstra(grafo, 0);

for (i = 0; i < go.length; i++) {
  console.log(go[i]);
}
