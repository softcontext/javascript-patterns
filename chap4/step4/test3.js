/*
Memoization
 */
const fn = function(...args) {
  const cacheKey = JSON.stringify(Array.prototype.slice.call(arguments));

  if (!fn.cache[cacheKey]) {
    let sum = 0;

    // 비용이 많이 드는 처리 로직
    for (let i = args[0]; i <= args[1]; i++) {
      sum += i;
    }

    const result = {
      sum,
      value() {
        console.log('sum =', this.sum);
      }
    };

    fn.cache[cacheKey] = result;
  }

  return fn.cache[cacheKey];
};

fn.cache = {};


let startTime = Date.now();
fn(1, 100000000).value();
// sum = 5000000050000000
let endTime = Date.now();
console.log('Elapsed time: ', (endTime - startTime));
// Elapsed time:  3537

startTime = Date.now();
fn(1, 100000000).value();
// sum = 5000000050000000
endTime = Date.now();
console.log('Elapsed time: ', (endTime - startTime));
// Elapsed time:  3

console.log(fn.cache);
// { '[1,100000000]': { sum: 5000000050000000, value: [Function: value] } }
