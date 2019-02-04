/* Heaps */

// left child: i * 2 right child: i * 2 + 1 parent: i / 2

let MinorHeap = function () {

  let heap = [null];

  this.printAll = () => heap;

  this.printMin = () => heap[1];

  this.add = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let idn = heap.length - 1;
      while (heap[idn] < heap[Math.floor(idn / 2)]) {
        if (idn >= 1) {
          [
            heap[Math.floor(idn / 2)],
            heap[idn]
          ] = [
            heap[idn],
            heap[Math.floor(idn / 2)]
          ];
          if (Math.floor(idn / 2) > 1) {
            idn = Math.floor(idn / 2);
          } else {
            break;
          };
        };
      };
    };
  };

  this.del = function (num) {
    var index = heap.indexOf(num);
    if (index > -1) {
      heap.splice(index, 1);
    }
  };

};

const minHeap = new MinorHeap();

// 5
minHeap.add(4); //1v
minHeap.add(9); //1v
console.log(minHeap.printMin()); //3
minHeap.del(4); //2v
console.log(minHeap.printMin()); //3
console.log(minHeap.printAll());