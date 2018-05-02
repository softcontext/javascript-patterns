if (!Function.prototype.method) {
  Function.prototype.method = function (name, implementation) {
    // 새로 작성한 생성자 함수의 프로토타입 객체에 메소드를 추가한다.
    this.prototype[name] = implementation;
    return this;
  };
}

const Person = function (name) {
  this.name = name;
}.method('getName', function () {
  return this.name;
}).method('setName', function (name) {
  this.name = name;
  return this;
});

let p = new Person('Tom');
console.log(p);
console.log(p.getName());
console.log(p.setName('John').getName());
