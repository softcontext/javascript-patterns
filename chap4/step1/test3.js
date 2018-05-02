let obj = {};

console.log(obj instanceof Object);
// true
console.log(obj.__proto__ === Object.prototype);
// true
console.log(obj.__proto__.constructor.name);
// Object
console.log(obj.constructor.name);
// Object

console.log('\n');

let entity = Object.create(null);

console.log(entity instanceof Object);
// false
console.log(entity.__proto__ === Object.prototype);
// false
console.log(entity.__proto__);
// undefined
console.log(entity.constructor);
// undefined
