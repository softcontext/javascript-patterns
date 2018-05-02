function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  const args = []; // 인수를 보관하는 배열

  function nest(i) {
    return function (a) { // 처음에는 5, 두번째는 3 값을 받는다.
      args.push(a); // 인수를 하나씩 받아서 보관한다.
      if (i === fn.length) {
        // 항수가 fn 함수의 인수의 길이와 같게 되면
        // 배열에 모아놓은 인수들을 낱개로 쪼개서 함수 fn에 전달하면서 호출한다.
        return fn(...args);
      }
      return nest(i + 1); // 인수 1개를 받는 다음 함수가 반환된다.
    };
  }

  return nest(1); // 인수 1개를 받는 첫 번째 함수가 반환된다.
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
