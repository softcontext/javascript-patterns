/*
자바스크립트는 자바의 기동 메소드 main이 없다.
코드 처리의 흐름은 파일 최상단에서부터 시작한다.
따라서, 파일 자체가 기동 메소드의 역할을 수행하는 것이다.
이를 글로벌 스코프라고 부른다.

자바스크립트는 클래스 개념이 없다.
더불어서 패키지, 임포트 개념도 없게 된다.
이는 협업작업 시 굉장한 불편함을 초래하는 원인이 된다.
이를 극복하기 위해서 함수 스코프를 사용한다.

노드는 모든 파일을 새로운 함수로 감싸 격리한 후 처리한다.
따라서, 노드가 컴파일할 때 글로벌 스코프의 this는 exports 객체를 가리키게 된다.
 */

/*
패턴
패턴은 어떤 범주의 문제를 해결하는 모범적인 템플릿이며 해결책이다.
복잡한 문제를 해결하는 처리로직을 패턴으로 추상화하여 취급하거나 논의의 편리성을
도모할 수 있다. 예를 들어 로직을 범위연산자로 감싸고 마지막에 리턴한다라는
표현보다 함수를 사용한다라고 얘기하는 것이 더욱 편리하다.
 */

var a, b = 10;

console.log(global.a); // undefined
console.log(global.b); // undefined
console.log(a); // undefined
console.log(b); // 10

let x, y = 20;

console.log(global.x); // undefined
console.log(global.y); // undefined
console.log(x); // undefined
console.log(y); // 20

var i = j = 30;

console.log(global.i); // undefined
console.log(global.j); // 30
console.log(i); // 30
console.log(j); // 30

let n = m = 40;

console.log(global.n); // undefined
console.log(global.m); // 40
console.log(n); // 40
console.log(m); // 40
