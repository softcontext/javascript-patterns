/*
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

fun.bind(thisArg[, arg1[, arg2[, ...]]])

  [, arg1[, arg2[, ...]]]
  대상 함수를 호출할 때 바인딩된 함수에 제공되는 인수 앞에 붙이는(prepend) 인수.
 */

function curry(fn) {
  return (...xs) => {
    // if (xs.length === 0) {
    //   throw Error('EMPTY INVOCATION');
    // }
    if (xs.length >= fn.length) {
      return fn(...xs);
    }
    return curry(fn.bind(null, ...xs));
  };
}

const adder = curry(function(a, b) {
  return a + b;
});

const add5 = adder(5);
console.log(add5(3));

const multiplier = curry(function (a, b, c) {
  return a * b * c;
});

console.log(multiplier(2)(3)(4));

console.log(multiplier(2, 3, 4));
console.log(multiplier(2, 3)(4));
console.log(multiplier(2)(3, 4));

console.log(multiplier()(2)(3, 4));
console.log(multiplier()(2)()(3, 4));
