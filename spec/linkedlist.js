let para = document.createElement("p");

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    _compare(a, b) {
        return a === b;
    }
    get(value) {
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (this._compare(currentNode.value, value)) {
                return i;
            } else if (currentNode.next) {
                currentNode = currentNode.next;
            } else return null;
        }
    }
    pop() {
        if (this.length >= 2) {
            let currentNode = this.head;
            let NodeToDelete = this.tail;
            for (let i = 0; i < this.length - 2; i++) {
                currentNode = currentNode.next;
            }
            delete currentNode.next;
            currentNode.next = null;
            this.tail = currentNode;
            length--;
            return NodeToDelete;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else return null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const test = () => {
    const someArray = new LinkedList();
    someArray.push("Jakub");
    return console.log(someArray.head);
}

describe('linkedList', () => {
    beforeEach(() => {
        arr = new LinkedList();
        arr.push(1);
        arr.push(11);
        arr.push(22);
        arr.push(3333);
        arr.push("nein");
    })
    it('pop test 1', () => {
        expect(arr.pop().value).toEqual('nein');
    })
});