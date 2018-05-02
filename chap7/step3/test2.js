/*
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

// 이 전화번호부 클래스의 get()이 호출될 때마다,
// 조회수를 따로 기록하여 저장하고 싶다면 어떡해야 할까?
// 전화번호부 클래스의 코드를 고치는 것은
// 예상치못한 사이드 이펙트를 초래할 수 있기 때문에 지양하고 싶다.
// 이런 경우에 프록시 패턴을 사용할 수 있다.

function PhoneBookProxy() {
  var phoneBook = new PhoneBook();
  var viewCount = 0;
  return {
    get: function(name, callback) {
      viewCount++;
      phoneBook.get(name, callback);
    },
    getViewCount: function() {
      return viewCount;
    }
  };
}

var pb = new PhoneBookProxy();
console.log('viewCount =', pb.getViewCount());
pb.get('Tom', (phone) => console.log('phone =', phone));
console.log('viewCount =', pb.getViewCount());

// 위와 같이 프록시 객체를 구현해서 조회수를 따로 저장하고
// PhoneBook을 대리하는 객체로 PhoneBookProxy를 사용하면 된다.
// 이 때 프록시 클래스는 공개된 인터페이스인 get()메소드를 반드시 구현해야 한다.

module.exports = {
  PhoneBook
}
