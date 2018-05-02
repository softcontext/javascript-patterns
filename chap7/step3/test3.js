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
  }, 1000);
}

/*
Proxy for Caching
앞에 PhoneBook 객체는 하나의 전화번호를 얻기 위해서는 1초를 기다려야 한다.
따라서 캐시를 이용하면 다음 요청 시 좀 더 빠르게 서비스할수 있을 것이다.
 */

function PhoneBookProxy() {
  var phoneBook = new PhoneBook();
  var viewCount = 0;
  var cache = {};

  return {
    get: function(name, callback) {
      viewCount++;

      console.log('cache =', cache);
      if (cache[name]) {
        console.log('#2');
        callback(cache[name]);
      } else {
        phoneBook.get(name, function(number) {
          console.log('#1');
          cache[name] = number;
          callback(number);
        });
      }
    },
    getViewCount: function() {
      return viewCount;
    },
    getCache: function () {
      return cache;
    }
  };
}

var pb = new PhoneBookProxy();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  pb.get('Tom', (phone) => console.log('#1 phone =', phone));

  console.log('Sleep ................ Start');
  await sleep(2000);
  console.log('Sleep ................ End');

  pb.get('Tom', (phone) => console.log('#2 phone =', phone));
}

demo();
