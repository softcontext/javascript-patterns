/*
https://hyunseob.github.io/2016/08/17/javascript-proxy/

프록시 객체는 다른 객체의 인터페이스 역할을 수행한다.
 */

function PhoneBook() {
  this.dictionary = {
    'Tom': '111',
    'John': '222',
    'Jane': '333'
  };
}

PhoneBook.prototype.get = function(name, callback) {
  var self = this;
  setTimeout(function() {
    callback(self.dictionary[name]);
  }, 3000);
}

var pb = new PhoneBook();
pb.get('Tom', (phone) => console.log('phone =', phone));

// 이 전화번호부 클래스의 get()이 호출될 때마다,
// 조회수를 따로 기록하여 저장하고 싶다면 어떡해야 할까?
// 전화번호부 클래스의 코드를 고치는 것은
// 예상치못한 사이드 이펙트를 초래할 수 있기 때문에 지양하고 싶다.
// 이런 경우에 프록시 패턴을 사용할 수 있다.
