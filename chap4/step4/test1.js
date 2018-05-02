/*
즉시 객체 초기화
 */

let obj = ({
  width: 500,
  height: 300,
  getSize() {
    return this.width + 'x' + this.height;
  },
  init() {
    console.log(this.getSize());
    console.log('초기화 로직');
    delete this.init;
    return this;
  }
}).init();

console.log(obj);
