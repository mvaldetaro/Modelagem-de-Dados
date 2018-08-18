// LIFO

const Stack = () => {
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
        if(top < 0) {
            return false;
        } else {
            const itemToReturn = data[top];
            data.splice(top, 1);
            top--;
            return itemToReturn;
        }
    }

    const isEmpty = () => {
        return data.length <= 0;
    }

    const first = () => {
        return data[data.length-1];
    }

    const last = () => {
        return data[0];
    }

    const len = () => {
        return data.length ;
    }

    const getItem = (n) => {
        if (data[n] != undefined) {
            return data[n];
        }
            console.log("Esta posição não existe na pilha atual");
            return null;
    }

    return {
        push,
        pop,
        values,
        len,
        isEmpty,
        first,
        last,
        getItem
    }
}

const stack = Stack();

console.log(stack.values());
console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.values());
console.log(stack.len());
stack.pop();
console.log(stack.values());
console.log(stack.isEmpty());
console.log(stack.first());
console.log(stack.last());
console.log(stack.getItem(0));
console.log(stack.getItem(5));
console.log(stack.getItem(1));