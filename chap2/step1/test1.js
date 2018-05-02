/*
유지보수의 유리한 코드란?
- 읽기 쉽다. 평상 시 사용하는 문장과 비슷할 수록 좋다.
- 일관적이다.
- 예측가능하다.
- 한 사람이 작성한 것처럼 보인다.
- 문서화작업이 용이하다.
 */

/**
 * 숫자 2개를 인수로 받아서 더한 후 그 결과를 반환한다.
 * @param  {Number} a 인수 1
 * @param  {Number} b 인수 2
 * @return {Number}   반환 값
 */
const add = function(a, b) {
  return a + b;
}

/**
 * [Car description]
 */
class Car {
  /**
   * [constructor description]
   * @param {[type]} color [description]
   */
  constructor(color) {
    this.color = color;
  }
  /**
   * [start description]
   * @return {[type]} [description]
   */
  start() {
    console.log('Car is running.');
  }
}
