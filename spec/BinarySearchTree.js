class SearchTree {
    constructor() {
        this.root = null;
    }
    push(value) {
        if (this.root === null) {
            this.root = new Branch(value);
        } else {
            let current = this.root;
            while (true) {
                if (value <= current.value) {
                    if (current.left === null) {
                        current.left = new Branch(value);
                        break;
                    } else {
                        current = current.left;
                    }
                }
                else {
                    if (current.right === null) {
                        current.right = new Branch(value);
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (!this.root) return false;
        let current = this.root;
        while (true) {
            if (value === (current.value)) return true;
            else {
                if (value<current.value) {
                    if (current.left === null) return false;
                    else current = current.left;
                } else {
                    if (current.right === null) return false;
                    else current = current.right;
                }
            }
        }
    }
}

class Branch {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


describe('Binary Search Tree', () => {
    beforeEach(() => {
        tree = new SearchTree();
        tree.push(2);
        tree.push(6);
        tree.push(7);
        tree.push(1);
        tree.push(5);
        tree.push(6);
    });
    it('push, find', () => {
        expect(tree.find(6)).toBe(true);
        expect(tree.find(4)).toBe(false);
        expect(tree.find(999)).toBe(false);
    })
})