/*
게으른 함수 선언(Lazy Function Definition)
최초 호출시점 전까지 함수를 완전히 정의하지 않는다.
호출된 이후에는 더 게을러져서 더 적게 로직을 처리한다.
 */

let hello = function () {
  console.log('한번만 실행하면 되는 초기화 로직');

  hello = function () {
    console.log('처리 로직');
  };
};

hello(); // 한번만 실행하면 되는 초기화 로직
hello(); // 처리 로직
hello(); // 처리 로직
