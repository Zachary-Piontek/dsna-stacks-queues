class Stack {
    #list;

    constructor(initList) {
        this.#list = initList || [];
    }

    get count() {
        return this.#list.length;
    }

    push(item) {
        this.#list.push(item);      
    }

    // addFront(item) {
    //     this.#list.pop(item);
    // }
    // addPeek(item) {
    //     this.#list.peek(item);
    // }
    // get list() {
    //     return this.#list.toString();
    // }
}

// const myStructure = new Stack (['joe', 'mary', 'mike']);

// console.log();
// myStructure.push('magic');
// console.log(myStructure);

class Queue {
    #list;

    constructor(initList) {
        this.#list = initList || [];
    }

    get count() {
        return this.#list.length;
    }

    enqueue(item) {
        this.#list.push(item);      
    }

    dequeue

    get next() {
        return this.#list[1];
    }

}


module.exports = { Stack, Queue };
