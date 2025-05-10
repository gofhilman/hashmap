import HashMap from "./hashmap.js";

const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.slots)
console.log(test.length())

test.set('dog', 'black')
test.set('lion', 'brown')
console.log(test.slots)
console.log(test.length())

test.set('moon', 'silver')
console.log(test.slots)
console.log(test.length())

test.set('elephant', 'white')
test.set('moon', 'golden')
console.log(test.slots)
console.log(test.length())

console.log(test.get("elephant"))
console.log(test.has("cihuahua"))
console.log(test.has("moon"))

test.remove("frog")
console.log(test.slots)
console.log(test.length())

console.log(test.keys())
console.log(test.values())
console.log(test.entries())

test.clear()
console.log(test.slots)
console.log(test.length())