import LinkedList from "./linked-list-class.js";

class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.slots = new Array(this.capacity).fill(new LinkedList()); 
        this.nodeNumber = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        console.log(this.slots[this.hash(key)].containsKey(key));
        if(this.slots[this.hash(key)].containsKey(key)) {
            this.slots[this.hash(key)].updateValue(key, value);
        } else {
            this.slots[this.hash(key)].append(key, value);
            this.nodeNumber++;
        }
        if (this.nodeNumber > this.loadFactor * this.capacity) {
            this.growSlots();
        }  
    }

    growSlots() {
        let copiedNodes = [];
        for(let slotIter = 0; slotIter < this.capacity; slotIter++) {
            let node = this.slots[slotIter].head;
            while(node) {
                copiedNodes.push(Object.entries(node)[0]);
                node = node.nextNode;
            }
        }
        this.capacity *= 2;
        this.slots = new Array(this.capacity).fill(new LinkedList());
        this.nodeNumber = 0;
        for(const node of copiedNodes) this.set(node[0], node[1]);
    }
}

export default HashMap;