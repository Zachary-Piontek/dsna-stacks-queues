class Stack {
    #list = [];

    constructor(initList) {
        if (initList) this.#list = initList;
    }
     addBack(item) {
        this.#list.push(item)       
    }

    addFront(item) {
        this.#list.pop();
    }

    addPeek(item) {
        this.#list.peek();
    }
}

const myStructure = new MyData (['joe', 'mary', 'mike']);

myStructure.addFront('magic');


class Queue {}

module.exports = { Stack, Queue };
