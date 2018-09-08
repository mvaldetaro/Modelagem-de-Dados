var arr = new Array(15);
var arrLength = arr.length;
var head = 0;
var tail = 0;
var Enqueue = 0;

const stage = document.querySelector('#stage');
const headDom = document.querySelector('#head');
const tailDom = document.querySelector('#tail');

const btnEnqueue = document.querySelector('#Enqueue');
const btnDequeue = document.querySelector('#Dequeue');

function randValue() {
  let values = [
    'Python',
    'Java',
    'Javascript',
    'C++',
    'C#',
    'Kotlin',
    'Swift',
    'Perl'
  ];

  let rand = values[Math.floor(Math.random() * values.length)];

  return rand;
}

function write() {
  stage.innerHTML = arr.toString();
  headDom.innerHTML = head;
  tailDom.innerHTML = tail;
}

function Enq() {

  if (tail == head - 1) {
    console.log('neca de pitibirirba');
  } else if (tail === head) {
    arr[tail] = randValue();
    tail++;
    writeHeadTail();
    write();
  } else if (head <= 0 && tail < arrLength - 1) {
    arr[tail] = randValue();
    tail++;
    writeHeadTail();
    write();
  } else if (head > 0 && tail === arrLength - 1) {
    arr[tail] = randValue();
    tail = 0;
    writeHeadTail();
    write();
  } else if (tail < head) {
    arr[tail] = randValue();
    tail++;
    writeHeadTail();
    write();
  } else if (head < tail && tail < arrLength - 1) {
    arr[tail] = randValue();
    tail++;
    writeHeadTail();
    write();
  }
}

function Deq() {
  if (tail == head) {
    console.log('neca de pitibirirba');
  } else if (head < arrLength) {
    arr[head] = "";
    head++;
    write();
    resetIndex();
    writeHeadTail();
  }
}

btnEnqueue
  .addEventListener('click', function () {
    Enq();
  });

btnDequeue.addEventListener('click', function () {
  Deq();
});

write();
writeHeadTail();
