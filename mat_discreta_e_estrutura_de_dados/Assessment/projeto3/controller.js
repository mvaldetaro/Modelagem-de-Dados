const menu = document.querySelector("#menu");
const sections = document.querySelector("#sections");
const itensList = document.querySelector("#itens-list");
const truckList = document.querySelector("#truck-list");
const localsList = document.querySelector("#local-list");
const entregasList = document.querySelector("#entregues-list");

const selectItemList = document.querySelector("#select-item");
const selectPontoList = document.querySelectorAll("#select-ponto");
const selectTruckList = document.querySelector("#select-caminhao");

const rotas = document.querySelector("#rotas");

for (let i = 0; i < menu.children.length; i++) {
  let btnMenu = menu
    .children[i]
    .addEventListener('click', function () {
      changeView(this.dataset["menu"]);
    });
};

function switchTabVisible(currentTab) {
  for (let i = 0; i < sections.children.length; i++) {
    sections
      .children[i]
      .classList
      .add("hide");
  }

  currentTab
    .classList
    .remove("hide");
};

function changeView(currentView) {

  let tab = sections.querySelector("#tab-" + currentView);

  switch (currentView) {
    case "1":
      switchTabVisible(tab);
      break;

    case "2":
      switchTabVisible(tab);
      break;

    case "3":
      switchTabVisible(tab);
      break;

    case "4":
      switchTabVisible(tab);
      break;

    case "5":
      switchTabVisible(tab);
      break;

    case "6":
      switchTabVisible(tab);
      break;

    default:
      console.log("default");
      break;
  }
};

function debug() {
  localsList.innerHTML = JSON.stringify(locais.values());
  itensList.innerHTML = JSON.stringify(itensEntrega.values());
  truckList.innerHTML = JSON.stringify(caminhoes.values());
};

function store() {
  storage.setItem('locais', JSON.stringify(locais.values()));
  storage.setItem('itens', JSON.stringify(itensEntrega.values()));
  storage.setItem('trucks', JSON.stringify(caminhoes.values()));
}

function feedItemList() {
  selectItemList.innerHTML = "";
  itensEntrega
    .values()
    .forEach((element, i) => {
      selectItemList.innerHTML += `<option value="${i}">${element.nome}</option>`;
    });
};

function feedLocalList() {
  selectPontoList[0].innerHTML = "";
  selectPontoList[1].innerHTML = "";
  locais
    .values()
    .forEach((element, i) => {
      selectPontoList[0].innerHTML += `<option value="${i}">${element.nome}</option>`;
      selectPontoList[1].innerHTML += `<option value="${i}">${element.nome}</option>`;
    });
};

function feedCaminhaoList() {
  selectTruckList.innerHTML = "";
  caminhoes
    .values()
    .forEach((element, i) => {
      selectTruckList.innerHTML += `<option value="${i}">${element.placa}</option>`;
    });
};

// Add Local
(function () {
  const inputLocal = document.querySelector("#input-local");
  const btnLocal = document.querySelector("#btn-local");

  btnLocal.addEventListener('click', function () {

    if (inputLocal.value != "") {

      let local = new Local(id(), inputLocal.value, []);
      locais.push(local);
      feedLocalList();
      debug();
      store();
    } else {
      console.log("Sem valor definido");
    }
  });
})();

// Add Item
(function () {
  const inputItem = document.querySelector("#input-volume");
  const btnItem = document.querySelector("#btn-volume");

  btnItem.addEventListener('click', function () {
    if (inputItem.value != "") {
      let item = new ItemEntrega(id(), inputItem.value);
      itensEntrega.push(item);
      feedItemList();
      debug();
      store();
    } else {
      console.log("Sem valor definido");
    }
  });
})();

// Add Caminhoes
(function () {
  const inputCaminhao = document.querySelector("#input-caminhao");
  const btnCaminhao = document.querySelector("#btn-caminhao");

  btnCaminhao.addEventListener('click', function () {
    if (inputCaminhao.value != "") {
      let item = new Caminhao(inputCaminhao.value, [], []);
      caminhoes.push(item);
      feedCaminhaoList();
      debug();
      store();
    } else {
      console.log("Sem valor definido");
    }
  });
})();

// Associar Itens a ponto de entrega
const btnLink = document.querySelector("#btn-link-ponto");

btnLink.addEventListener('click', function () {
  let indexItem = parseInt(selectItemList.value);
  let indexLocal = parseInt(selectPontoList[0].value);
  let item = itensEntrega.getItem(indexItem);
  let local = locais.getItem(indexLocal);

  local
    .itens
    .push(item);

  debug();
  store();
});

// Associar Itens a ponto de entrega
const btnLinkCaminhao = document.querySelector("#btn-link-caminhao");

btnLinkCaminhao.addEventListener('click', function () {
  let indexLocal = parseInt(selectPontoList[1].value);
  let indexCaminhao = parseInt(selectTruckList.value);
  let local = locais.getItem(indexLocal);
  let caminhao = caminhoes.getItem(indexCaminhao);

  caminhao
    .local
    .push(local);

  debug();
  store();
});

//Entrega

function getMostFitTruck() {
  let truck = null;
  let temp = 0;
  let weight;
  let trucks = caminhoes.values();

  trucks.forEach((t, i) => {

    if (temp === 0) {
      weight = t.itens.length + t.local.length;
      temp = 1;
      truck = i;
    } else if ((t.itens.length + t.local.length) < weight) {

      weight = t.itens.length + t.local.length;
      truck = i;
    }
  });

  console.log(truck);
  return truck;
}

const btnEntrega = document.querySelector("#btn-entrega");

btnEntrega.addEventListener('click', function () {
  let trucks = caminhoes.values();
  let pontos = locais.values();

  // Verifica pontos de entrega
  pontos.forEach((p) => {
    var alocado = false;
    trucks.forEach((t) => {
      t
        .local
        .forEach((l) => {
          if (p.id === l.id) {
            alocado = true;
          }
        })
    });
    console.log(alocado);

    if (alocado === false) {

      caminhoes
        .getItem(getMostFitTruck())
        .local
        .push(p);
    }

  });

  // Empilha itens do caminhão e imprime rota de entrega
  var ptEntregasTotal = 0;
  var itensEntreguesTotal = 0;

  trucks.forEach((t) => {
    rotas.innerHTML += `<h3>Percurso do caminhão <b>${t.placa}</b><h3>`;
    var local = t.local;
    t.itens = [];
    local.forEach((l) => {
      ptEntregasTotal++;
      rotas.innerHTML += `<p>Visitando ponto e entrega <b>${l.nome}</b>. Foram entregues os itens: </p>`;
      var item = l.itens;
      item.forEach((i) => {
        itensEntreguesTotal++;
        rotas.innerHTML += `<p>> <b>${i.nome}</b> - ${l.nome} </p>`;
        t
          .itens
          .push(i);
      });
    });
  });

  rotas.innerHTML += `<p>Total de pontos de entrega: <b>${ptEntregasTotal}</b></p>`;
  rotas.innerHTML += `<p>Total de itens entregues: <b>${itensEntreguesTotal}</b></p>`;
});

// Init
debug();
store();
feedItemList();
feedLocalList();
feedCaminhaoList();