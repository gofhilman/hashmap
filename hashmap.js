import LinkedList from "./linked-list-class.js";

class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.slots = this.createSlots();
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
        const slot = this.slots[this.hash(key)];   
        if(slot.containsKey(key)) {
            slot.updateValue(key, value);
        } else {
            slot.append(key, value);
            this.nodeNumber++;
        }
        if (this.nodeNumber > this.loadFactor * this.capacity) {
            this.growSlots();
        }  
    }

    get(key) {
        const slotIndex = this.hash(key);
        if (slotIndex < 0 || slotIndex >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        return this.slots[slotIndex].getValue(key);
    }

    has(key) {
        const slotIndex = this.hash(key);
        if (slotIndex < 0 || slotIndex >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        return this.slots[slotIndex].containsKey(key);      
    }

    remove(key) {
        const slotIndex = this.hash(key);
        if (slotIndex < 0 || slotIndex >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        const keyState = this.slots[slotIndex].removeNode(key);
        if(keyState) this.nodeNumber--;
        return keyState;      
    }

    length() {
        return this.nodeNumber;
    }

    clear() {
        this.capacity = 16;
        this.slots = this.createSlots();
        this.nodeNumber = 0;
    }

    keys() {
        return this.copy("keys");
    }

    values() {
        return this.copy("values");
    }
    
    entries() {
        return this.copy("entries");
    }

    growSlots() {
        const copiedNodes = this.copy("entries");
        this.capacity *= 2;
        this.slots = this.createSlots();
        this.nodeNumber = 0;
        for(const node of copiedNodes) this.set(node[0], node[1]);
    }

    copy(propType) {
        let total = [];
        for(let slotIter = 0; slotIter < this.capacity; slotIter++) {
            let node = this.slots[slotIter].head;
            while(node) {
                switch(propType) {
                    case "keys":
                        total.push(node.key);
                        break;
                    case "values":
                        total.push(node.value);
                        break;
                    case "entries":
                        total.push([node.key, node.value]);
                }
                node = node.nextNode;
            }
        }
        return total;         
    }

    createSlots() {
        return new Array(this.capacity)
            .fill(null)
            .map(() => new LinkedList());
    }
}

export default HashMap;