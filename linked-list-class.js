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
            if(key in node) return true;
            node = node.nextNode;
        }
        return false;
    }

    updateValue(key, value) {
        let node = this.head;
        while(node) {
            if(key in node) {
                node[key] = value;
                break;
            }
            node = node.nextNode;
        }
    }

    // find(value) {
    //     let node = this.head;
    //     let nodeIter = 0;
    //     while(node) {
    //         if(node.value === value) return nodeIter;
    //         node = node.nextNode;
    //         nodeIter++;
    //     }
    //     return null;
    // }

    // toString() {
    //     if(!this.head) return "";
    //     let printedList = "";
    //     let node = this.head;
    //     while(node) {
    //         printedList += "( " + node.value + " ) -> ";
    //         node = node.nextNode;
    //     }
    //     return printedList += null;
    // }
}

export default LinkedList;