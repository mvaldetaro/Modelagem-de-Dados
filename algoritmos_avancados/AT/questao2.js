const moedas = [50, 25, 21, 10, 5, 1];

function pago(value) {
  return value === 0;
}

function moeda(moedas, valor) {
  return moedas.find(moeda => valor >= moeda);
}

function calculaTroco(valor, troco = []) {
  if (pago(valor)) {
    return troco;
  } else {
    let moeda = moedas.find(moeda => valor >= moeda);
    return calculaTroco((valor -= moeda), [...troco, moeda]);
  }
}

console.log(calculaTroco(63));
