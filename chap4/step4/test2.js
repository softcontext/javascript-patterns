/*
일반적으로 브라우저의 기능은 독립적으로 변한다. 망할 놈들!
브라우저 탐지처럼 프로그램 생명주기 동안 변경되지 않는 대상은
초기화 시점의 분기 처리를 수행한다.
 */

let utils = {
  addListener: null,
  removeListener: null
};

if (typeof window.addEventListener === 'function') {
  utils.addListener = function (el, type, fn) {
    el.addEventListener(type, fn);
  }
  utils.removeListener = function (el, type, fn) {
    el.removeEventListener(type, fn);
  }
} else if (typeof document.attachEvent === 'function') { // IE
  utils.addListener = function (el, type, fn) {
    el.attachEvent('on' + type, fn);
  }
  utils.removeListener = function (el, type, fn) {
    el.detachEvent('on' + type, fn);
  }
} else {
  utils.addListener = function (el, type, fn) {
    el['on' + type] = fn;
  }
  utils.removeListener = function (el, type, fn) {
    el['on' + type] = null;
  }
}
