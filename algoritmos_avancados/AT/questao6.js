function quickSortDuplo(arr, primeiro, ultimo, divisor) {
  let tamanho = ultimo - primeiro;

  let auxA = tamanho / divisor;
  let auxB = primeiro + auxA;
  let auxC = ultimo - auxA;

  let pivotA = arr[primeiro];
  let pivotB = arr[ultimo];

  let menor = primeiro + 1;
  let maior = ultimo - 1;

  let distancia = maior - menor;

  //console.log(arr.length * 2 + divisor);

  if (tamanho < arr.length * 2 + divisor) {
    for (let i = primeiro + 1; i <= ultimo; i++) {
      for (let j = i; j > primeiro && arr[j] < arr[j - 1]; j--) {
        swap(arr, j, j - 1);
      }
    }
    return;
  }

  if (auxB <= primeiro) {
    auxB = primeiro + 1;
  }
  if (auxC >= ultimo) {
    auxC = ultimo - 1;
  }
  if (arr[auxB] < arr[auxC]) {
    swap(arr, auxB, primeiro);
    swap(arr, auxC, ultimo);
  } else {
    swap(arr, auxB, ultimo);
    swap(arr, auxC, primeiro);
  }

  for (let k = menor; k <= maior; k++) {
    if (arr[k] < pivotA) {
      swap(arr, k, menor++);
    } else if (arr[k] > pivotB) {
      while (k < maior && arr[maior] > pivotB) {
        maior--;
      }
      swap(arr, k, maior--);
      if (arr[k] < pivotA) {
        swap(arr, k, menor++);
      }
    }
  }

  if (distancia < arr.length / 2) {
    divisor++;
  }
  swap(arr, menor - 1, primeiro);
  swap(arr, maior + 1, ultimo);

  quickSortDuplo(arr, primeiro, menor - 2, divisor);
  quickSortDuplo(arr, maior + 2, ultimo, divisor);

  if (distancia > tamanho - arr.length / 2 && pivotA != pivotB) {
    for (let k = menor; k <= maior; k++) {
      if (arr[k] == pivotA) {
        swap(arr, k, menor++);
      } else if (arr[k] == pivotB) {
        swap(arr, k, maior--);
        if (arr[k] == pivotA) {
          swap(arr, k, menor++);
        }
      }
    }
  }

  if (pivotA < pivotB) {
    quickSortDuplo(arr, menor, maior, divisor);
  }
}

function swap(arr, i, j) {
  let auxA = arr[i];
  arr[i] = arr[j];
  arr[j] = auxA;
}

let lista = [75, 1, 56, 21, 6, 4, 89, 68, 5, 37, 15, 11];

quickSortDuplo(lista, 0, 11, 3);

console.log(lista);
