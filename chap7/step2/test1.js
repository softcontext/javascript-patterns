/*
Factory
 */

function CarMaker() {

}

// 공통적으로 반복되는 기능은 상속을 통해 제공한다.
CarMaker.prototype.drive = function () {
  return `Vroom, I have ${this.doors} doors.`;
};

// Car 객체들을 생성하는 스테틱 메소드
CarMaker.factory = function (type) {
  let constr = type;
  let newcar;

  if (typeof CarMaker[constr] !== 'function') {
    throw {
      name: 'Error',
      message: constr + ' does not exist.'
    };
  }

  if (typeof CarMaker[constr].prototype.drive !== 'function') {
    CarMaker[constr].prototype = new CarMaker();
  }

  newcar = new CarMaker[constr]();

  return newcar;
};

// CarMaker를 상속하는 특화된 생성자들.
CarMaker.Compact = function () {
  this.doors = 4;
};
CarMaker.Convertible = function () {
  this.doors = 2;
};
CarMaker.SUV = function () {
  this.doors = 5;
};

// 문자열로 타입을 받아 해당 타입의 객체를 생성한다.
var corolla = CarMaker.factory('Compact');
console.log(corolla);
console.log(corolla.drive());
