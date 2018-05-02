/*
Sandbox Pattern
 */

function Sandbox(...args) {
  let cb = args.pop();
  // 모듈은 배열 또는 문자열로 받는다.
  let modules = args[0] && typeof args[0] === 'string' ? args : args[0];

  // 서비스: 함수가 생성자로 호출되도록 보장한다.
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, cb);
  }

  // #1. 새 객체에 필요한 프로퍼티들을 추가한다.
  this.a = 10;
  this.b = 20;

  // 모듈이 없거나 * 이면 모든 모듈을 사용한다는 의미다.
  if (!modules || modules === '*' || modules[0] === '*') {
    modules = [];
    for (let prop in Sandbox.modules) {
      if (Sandbox.modules.hasOwnProperty(prop)) {
        modules.push(prop);
      }
    }
  }

  // #2. 새 객체에 모듈 추가 작업을 수행한다.
  for (let i = 0; i < modules.length; i++) {
    Sandbox.modules[modules[i]](this);
  }

  // 필요한 기능을 탑재한 새 객체를 전달하면서 콜백함수를 호출한다.
  // 콜백함수는 일반 개발자가 작성하고
  // 샌드박스와 모듈 기능은 프레임워크 개발자가 작성한다.
  // 일반 개발자가 프레임워크 개발자가 만들어 놓은 모듈중에서
  // 필요한 모듈을 요청하면 콜백함수의 인수로 넘겨 받아서 사용하는 방식이다.
  cb(this);
}

Sandbox.prototype = {
  name: 'My App',
  version: '1.0.0',
  getName() {
    return this.name;
  }
};

Sandbox.modules = {}

Sandbox.modules.dom = function (box) {
  box.getElement = function () {
    console.log('box.getElement() called.');
  };
  box.getStyle = function () {
    console.log('box.getStyle() called.');
  };
  box.foo = 'bar';
};

Sandbox.modules.event = function (box) {
  box.attachEvent = function () {
    console.log('box.attachEvent() called.');
  };
  box.detachEvent = function () {
    console.log('box.detachEvent() called.');
  };
};


module.exports = {
  Sandbox
}
