/*
비공개 스테틱 멤버
 */
const Car = (function() {
  let counter = 0;

  const Vehicle = function() {
    // 객체당 1씩 증가하므로 생성된 개별 객체의 유일성을 식별하는 ID가 될 수 있다.
    console.log('#', counter += 1);

    this.uid = counter;
  };

  Vehicle.prototype.getLastId = function () {
    return counter;
  };

  return Vehicle;
}());

let c1 = new Car();
console.log(c1);
console.log(c1.getLastId());

let c2 = new Car();
console.log(c2);
console.log(c2.getLastId());

let c3 = new Car();
console.log(c3);
console.log(c3.getLastId());

console.log();

console.log(c1.getLastId());
console.log(c2.getLastId());
console.log(c3.getLastId());
