/*
Mix-in
 */

function mix() {
  let child = {};

  for (let i = 0; i < arguments.length; i++) { // 파라미터의 개수
    for (let prop in arguments[i]) { // 인수는 객체
      if (arguments[i].hasOwnProperty(prop)) {
        child[prop] = arguments[i][prop];
      }
    }
  }

  return child;
}

var cake = mix(
  {eggs: 2, large: true},
  {butter: 1, salted: true},
  {flour: '3 cups'}
);

console.log(cake);
