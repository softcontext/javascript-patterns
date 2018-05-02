/*
싱글톤
 */

function Universe() {
  var instance = this;
  Universe = function () {
    return instance;
  };
  // 생성자로 사용되는 경우 반환구문을 생략하면 다음과 같다.
  // return this;
}

let u1 = new Universe();
let u2 = new Universe();

console.log(u1);
console.log(u2);
console.log(u1 === u2);
