/*
싱글톤
 */

const Universe = (function() {
  function Super() {
    if (instance) {
      return instance;
    }
  }

  var instance = new Super();

  return Super;
}());

Universe.prototype.nothing = true;

let u1 = new Universe();

Universe.prototype.everything = true;

let u2 = new Universe();

console.log(u1.nothing); // true
console.log(u2.nothing); // true

console.log(u1.everything); // true
console.log(u2.everything); // true

console.log(u1.constructor === Universe); // true
console.log(u2.constructor === Universe); // true
