/*
싱글톤
Universe 함수의 코드가 짧아서 좋아 보이지만
이상하게 작동한다.
 */

function Universe() {
  var instance = this;
  Universe = function () { // (A)
    return instance;
  };
}

Universe.prototype.nothing = true;

let u1 = new Universe();

Universe.prototype.everything = true;

let u2 = new Universe();

console.log(u1.nothing); // true
console.log(u2.nothing); // true

/*
(A) 지점에서 Universe가 가리키는 함수가 바뀐다.
따라서, 첫 new Universe(); 코드 전에 추가된
Universe.prototype.nothing = true; 코드만이 사용되고
이후에 추가된 Universe.prototype.everything = true; 코드는 사용되지 않는다.
 */

console.log(u1.everything); // undefined
console.log(u2.everything); // undefined

// u1.constructor가 가리키는 것은 Universe가 이전에 가리키던 함수이지
// Universe가 현재 가리키는 함수는 아니다.
console.log(u1.constructor === Universe); // false
console.log(u2.constructor === Universe); // false
