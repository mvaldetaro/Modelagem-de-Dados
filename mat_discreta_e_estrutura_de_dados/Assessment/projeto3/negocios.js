var storage = localStorage;

const Caminhoes = () => {
  const data = JSON.parse(localStorage.getItem('trucks')) || [];

  const values = () => {
    return data;
  }

  const push = (value) => {
    data[data.length] = value;
  }

  const shift = () => {
    if (data.length > 0) {
      var item = data[0];
      data.splice(0, 1);
      return item;
    } else {
      console.log("Não há objetos");
    }
  }

  const getItem = (n) => {
    if (data[n] != undefined) {
      return data[n];
    }
    console.log("Esta posição não existe");
    return null;
  }

  return {push, shift, values, getItem}
}

const ItensEntrega = () => {
  const data = JSON.parse(localStorage.getItem('itens')) || [];

  const values = () => {
    return data;
  }

  const push = (value) => {
    data[data.length] = value;
  }

  const shift = () => {
    if (data.length > 0) {
      var item = data[0];
      data.splice(0, 1);
      return item;
    } else {
      console.log("Não há objetos");
    }
  }

  const getItem = (n) => {
    if (data[n] != undefined) {
      return data[n];
    }
    console.log("Esta posição não existe");
    return null;
  }

  return {push, shift, values, getItem}
}

const Volumes = () => {
  const data = [];
  let top = -1;

  const values = () => {
    return data;
  }

  const push = (value) => {
    top++;
    data[top] = value;
  }

  const pop = () => {
    if (top < 0) {
      return false;
    } else {
      const itemToReturn = data[top];
      data.splice(top, 1);
      top--;
      return itemToReturn;
    }
  }

  const first = () => {
    return data[data.length - 1];
  }

  return {push, pop, values, first}
}

const PontosEntrega = () => {
  const data = JSON.parse(localStorage.getItem('locais')) || [];

  const values = () => {
    return data;
  }

  const push = (value) => {
    data[data.length] = value;
  }

  const shift = () => {
    if (data.length > 0) {
      var item = data[0];
      data.splice(0, 1);
      return item;
    } else {
      console.log("Não há objetos");
    }
  }

  const getItem = (n) => {
    if (data[n] != undefined) {
      return data[n];
    }
    console.log("Esta posição não existe");
    return null;
  }

  return {push, shift, values, getItem}
}

function id() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4();
}

var itensEntrega = ItensEntrega();
var caminhoes = Caminhoes();
var locais = PontosEntrega();
var volumes = Volumes();