function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  function nest(N, args) {
    return (a) => {
      if (N - 1 === 0) {
        return fn(...args, a);
      }
      return nest(N - 1, [...args, a]);
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
