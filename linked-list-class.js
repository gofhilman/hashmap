import Node from "./node-class.js";

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(key, value) {
        const lastNode = new Node(key, value);
        if(!this.head) {
            this.head = lastNode;
        } else {
            let node = this.head;
            while(node.nextNode) node = node.nextNode;
            node.nextNode = lastNode;
        }
    }

    prepend(key, value) {
        const firstNode = new Node(key, value);
        firstNode.nextNode = this.head;
        this.head = firstNode;
    }

    size() {
        let sizeCounter = 0;
        let node = this.head;
        while(node) {
            sizeCounter++;
            node = node.nextNode;
        }
        return sizeCounter;
    }

    toHead() {
        return this.head;
    }    

    toTail() {
        let node = this.head;
        while(node.nextNode) node = node.nextNode;
        return node;
    }

    at(index) {
        let node = this.head;
        for(let nodeIter = 0; nodeIter < index; nodeIter++) {
            node = node.nextNode;
        }
        return node;
    }

    pop() {
        let node = this.head;
        while(node.nextNode.nextNode) node = node.nextNode;
        node.nextNode = null;
    }

    containsKey(key) {
        let node = this.head;
        while(node) {
            if(node.key === key) return true;
            node = node.nextNode;
        }
        return false;
    }

    updateValue(key, value) {
        let node = this.head;
        while(node) {
            if(node.key === key) {
                node.value = value;
                break;
            }
            node = node.nextNode;
        }
    }

    getValue(key) {
        let node = this.head;
        while(node) {
            if(node.key === key) return node.value;
            node = node.nextNode;
        }
        return null;
    }

    removeNode(key) {
        let node = this.head;
        if(node.key === key) {
            this.head = node.nextNode;
            return true;
        } else {
            while(node) {
                if(node.nextNode.key === key) {
                    node.nextNode = node.nextNode.nextNode;
                    return true;
                }
            }
            return false;
        }
    }
}

export default LinkedList;