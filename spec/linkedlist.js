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







let node = document.createTextNode(test());
para.appendChild(node);
let main = document.querySelector("main");
main.appendChild(para);