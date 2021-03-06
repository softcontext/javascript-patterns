function callTaker(a, b, c, d, e) {
  console.log(Object.getOwnPropertyNames(arguments));
  // [ '0', '1', '2', '3', 'length', 'callee' ]
  console.log(arguments.length);
  // 4
  console.log(arguments.callee.name);
  // callTaker
  console.log(arguments.callee.caller.name);
  // callMaker
  console.log(arguments.callee.caller.caller.name);
  // init
  console.log(arguments);
  // { '0': 10, '1': 20, '2': 30, '3': 40 }
  console.log();

  console.log(Object.getOwnPropertyNames(callTaker));
  // [ 'length', 'name', 'arguments', 'caller', 'prototype' ]
  console.log(callTaker.length);
  // 5
  console.log(callTaker.name);
  // callTaker
  console.log(callTaker.caller.name);
  // callMaker
  console.log(callTaker.caller.caller.name);
  // init
  console.log(callTaker.prototype.constructor.name);
  // callTaker
  console.log(callTaker.__proto__.constructor.name);
  // Function
  console.log(callTaker.constructor.name);
  // Function
  console.log(callTaker instanceof Function);
  // true
}

function callMaker() {
  callTaker(10, 20, 30, 40);
}

function init() {
  callMaker();
}

init();
