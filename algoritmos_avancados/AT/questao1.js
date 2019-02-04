// Algoritmo genetico Magno Valdetaro Inicio
var step;
var populacao = [];
var novaGeracao = [];
var tamanhoPopulacao = 20;
var genPosicoes = 6;
var encontrado = false;

function gerarIndividuo() {
  let individuo = [];

  for (let i = 0; i < genPosicoes; i++) {
    let gen = Math.floor(Math.random() * 2);
    individuo.push(gen);
  }

  //console.log(individuo);
  return individuo;
}

//Gerar população inicial

function populacaoInicial() {
  step = 1;

  for (let i = 0; i < tamanhoPopulacao; i++) {
    populacao.push(gerarIndividuo());
  }

  //console.log('População Inicial: \n'); console.log(populacao);
}

//populacaoInicial(); Calcualr aptidão

function calcAptidao(individuo) {
  let aptidao = 0;
  for (let i = 0; i < genPosicoes; i++) {
    aptidao = aptidao + individuo[i];
  }
  return aptidao;
}

//calcAptidao(populacao[0]);

function sortPopulacao() {
  for (let i = 0; i < populacao.length; i++) {
    for (let j = 0; j < populacao.length - i - 1; j++) {
      if (calcAptidao(populacao[j]) < calcAptidao(populacao[j + 1])) {
        let temp = populacao[j];
        populacao[j] = populacao[j + 1];
        populacao[j + 1] = temp;
      }
    }
  }
  //console.log("\nPopulação ordenada:");
  //console.log(populacao);
}

// Seleção

function selecionaIndividuos() {
  //console.log("seleciona");
  let selecionados = [];

  for (let i = 0; i < tamanhoPopulacao; i++) {
    selecionados.push(populacao[i]);
  }

  populacao = selecionados;

  //console.log(populacao);
}

function crossover(individuoA, individuoB) {
  let ponto = Math.floor(Math.random() * genPosicoes);
  let filhoA = [];
  let filhoB = [];

  //console.log(ponto)

  for (let i = 0; i <= ponto; i++) {
    let temp = individuoA[i];
    try {
      individuoA[i] = individuoB[i];
      individuoB[i] = temp;
    } catch (e) {
      //console.log(e);
      console.log("Não há mais indivíduos");
    }
  }

  for (let i = 0; i < individuoA.length / 2; i++) {
    try {
      filhoA.push(individuoA[i]);
      filhoB.push(individuoB[i]);
    } catch (e) {}
  }

  for (let i = individuoA.length / 2; i < individuoA.length; i++) {
    try {
      filhoA.push(individuoA[i]);
      filhoB.push(individuoB[i]);
    } catch (e) {}
  }

  novaGeracao.push(filhoA, filhoB);

  //console.log('Nova geração:'); console.log(novaGeracao);

  return novaGeracao;
}

function selecionaNovaGeracao() {
  let selecionados = [];

  novaGeracao.forEach(individuo => {
    if (selecionados.length < novaGeracao.length / 2) {
      var random = Math.floor(Math.random() * 2);
      if (random == 1) {
        selecionados.push(individuo);
      }
    }
  });

  novaGeracao = selecionados;
  //console.log("Nova geracao selecionada: ");
  //console.log(novaGeracao);
}

function mutacao(geracao) {
  var qtdXMen = Math.floor((geracao.length / 100) * 5);
  //console.log(`Probalidade de Mutação: ${qtdXMen}`);

  for (let i = 0; i < qtdXMen; i++) {
    let qtdGenes = Math.floor(Math.random() * (genPosicoes - 2));
    for (let j = 0; j < qtdGenes; j++) {
      var gene = Math.floor(Math.random() * genPosicoes);
      if (geracao[i][gene] == 1) {
        geracao[i][gene] = 0;
      } else {
        geracao[i][gene] = 1;
      }
    }
  }

  geracao.forEach(individuo => {
    populacao.push(individuo);
  });

  //console.log("Nova população:");
  //console.log(populacao);
}

function objetivo() {
  let check = false;
  populacao.forEach(individuo => {
    if (calcAptidao(individuo) === 6) {
      console.log(individuo);
      check = true;
    }
  });

  return check;
}

populacaoInicial();
sortPopulacao();

for (let g = 1; g <= 1000; g++) {
  selecionaIndividuos();
  for (let i = 0; i < populacao.length; i += 2) {
    crossover(populacao[i], populacao[i + 1]);
  }

  selecionaNovaGeracao();
  mutacao(novaGeracao);

  console.log(`Geração número: ${g}`);

  if (objetivo()) {
    encontrado = true;
    break;
  }
}

if (encontrado) {
  console.log("Indivíduo perfeito encontrado");
} else {
  console.log("Nenhum Indivíduo perfeito encontrado");
}
