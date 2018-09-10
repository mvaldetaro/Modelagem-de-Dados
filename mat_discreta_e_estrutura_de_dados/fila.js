// FIFO

const Fila = () => {
  const data = [];

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

  return {push, shift, values}
}

const fila = Fila();

console.log(fila.values());
fila.push(50);
fila.push(30);
fila.push(230);
fila.push(10);
console.log(fila.values());
fila.shift();
console.log(fila.values());