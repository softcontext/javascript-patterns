/*
객체 생성을 리터럴 표기법으로 하면 유효범위 판별 작업을 수행하지 않기 때문에
빠르다. 생성자에 로직을 수행하지도 않기 때문에 조금 더 빨라진다.
반대로, 생성자 함수를 사용하여 객체를 생성하는 시도를 한다면
유효범위에 동일한 이름의 생성자가 있는지 판별하여 하기 때문에
생성자 함수를 호출한 위치에서부터 쭉 거슬러 올라가며 유효범위를 검색해야 하고
이는 처리가 상대적으로 느린 원인이 된다.
 */

console.log(TypeError.prototype.__proto__.constructor === Error);

/*
throw문은 Error 생성자를 통해 객체를 생성해야 하는 것은 아니며
직접 정의한 객체도 던질 수 있다. 이 객체는 name, message 외에도
임의의 프로퍼티를 가질 수 있기 때문에 catch 문에서 처리할 정보를 담아
전달하여 사용한다.
 */
try {
  throw {
    name: 'MyErrorType',
    message: 'Something is wrong',
    bag: '에러와 관련한 부가적인 정보',
    remedy: function () {
      console.log('에러를 처리합니다.');
    }
  }
} catch (e) {
  console.log(e);
  e.remedy();
} finally {

}
