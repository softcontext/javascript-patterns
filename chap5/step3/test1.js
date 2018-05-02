const {Sandbox} = require('./common');

console.log(Object.getOwnPropertyNames(Sandbox));
console.log(Object.getOwnPropertyNames(Sandbox.modules)); // [ 'dom', 'event' ]
console.log();

Sandbox('event', function (box) {
  console.log(box);
  console.log(box.name, box.version);
  console.log();
});
// { a: 10, b: 20, attachEvent: [Function], detachEvent: [Function] }
// My App 1.0.0

Sandbox(['dom'], function (box) {
  console.log(box);
  box.getElement();
  console.log();
});
// { a: 10,
//   b: 20,
//   getElement: [Function],
//   getStyle: [Function],
//   foo: 'bar' }
// box.getElement() called.

Sandbox(['dom', 'event'], function (box) {
  console.log(box);
  console.log();
});
// { a: 10,
//   b: 20,
//   getElement: [Function],
//   getStyle: [Function],
//   foo: 'bar',
//   attachEvent: [Function],
//   detachEvent: [Function] }

Sandbox(function (box) {
  console.log(box);
  console.log();
});
// { a: 10,
//   b: 20,
//   getElement: [Function],
//   getStyle: [Function],
//   foo: 'bar',
//   attachEvent: [Function],
//   detachEvent: [Function] }
