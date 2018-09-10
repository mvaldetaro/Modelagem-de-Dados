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
        if (top < 0) {
            return false;
        } else {
            data.reverse();
            const itemToReturn = data[top];
            data.splice(top, 1);
            top--;
            data.reverse();
        }
    }

    return {push, pop, values}
}

const stack = Stack();

console.log(stack.values());

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.values());
stack.pop();
console.log(stack.values());