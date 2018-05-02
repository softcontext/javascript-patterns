function curry(fn) {
  function nest(N, args) {
    return (...xs) => {
      // if (xs.length === 0) {
      //   throw Error('EMPTY INVOCATION');
      // }
      if (N - xs.length <= 0) {
        return fn(...args, ...xs);
      }
      return nest(N - xs.length, [...args, ...xs]);
    };
  }
  return nest(fn.length, []);
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
