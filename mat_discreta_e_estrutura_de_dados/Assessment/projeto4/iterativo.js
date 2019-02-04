(function () {
  var metadados = [
    {
      "to": "1",
      "from": "2"
    }, {
      "to": "1",
      "from": "3"
    }, {
      "to": "1",
      "from": "4"
    }, {
      "to": "1",
      "from": "5"
    }, {
      "to": "1",
      "from": "6"
    }, {
      "to": "2",
      "from": "1"
    }, {
      "to": "3",
      "from": "1"
    }, {
      "to": "4",
      "from": "1"
    }, {
      "to": "4",
      "from": "2"
    }
  ];

  //Vetor
  var v = [];

  //Alimenta o vetor com metadados aleatóriamente
  for (let index = 0; index < 20; index++) {
    v.push(metadados[Math.floor(Math.random() * metadados.length)]);
  }

  // Retorna a quantidade de ocorrencias do metadado "to" com valor "1" de forma
  // iterativa

  function event(vetor) {
    let qtd = 0;

    vetor.forEach(element => {
      if (element.to === "1") {
        qtd++
      }
    });

    return qtd;
  }

  // Imprime os valores do vetor no console no console
  console.log(v);

  // Imprime resultado no console
  console.log("Iterativo: ");
  console.log(event(v));
})();