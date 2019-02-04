class ItemEntrega {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
  }
}

class Local {
  constructor(id, nome, itens) {
    this.id = id;
    this.nome = nome;
    this.itens = itens;
  }
}

class Caminhao {
  constructor(placa, local, itens) {
    this.placa = placa;
    this.local = local;
    this.itens = itens;
  }
}