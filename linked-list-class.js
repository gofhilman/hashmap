import Node from "./node-class.js";

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const lastNode = new Node();
        lastNode.value = value;
        if(!this.head) {
            this.head = lastNode;
        } else {
            let node = this.head;
            while(node.nextNode) node = node.nextNode;
            node.nextNode = lastNode;
        }
    }

    prepend(value) {
        const firstNode = new Node();
        firstNode.value = value;
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

    contains(value) {
        let node = this.head;
        while(node) {
            if(node.value === value) return true;
            node = node.nextNode;
        }
        return false;
    }

    find(value) {
        let node = this.head;
        let nodeIter = 0;
        while(node) {
            if(node.value === value) return nodeIter;
            node = node.nextNode;
            nodeIter++;
        }
        return null;
    }

    toString() {
        if(!this.head) return "";
        let printedList = "";
        let node = this.head;
        while(node) {
            printedList += "( " + node.value + " ) -> ";
            node = node.nextNode;
        }
        return printedList += null;
    }
}

export default LinkedList;