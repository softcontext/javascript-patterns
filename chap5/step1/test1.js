/*
// let, const 는 호이스팅되지 않는다.

let App = App || {};
// ReferenceError: App is not defined
 */

var App = App || {};

/*
5.1 네임스페이스 패턴
 */

App.ns = function (package) {
  let parts = package.split('.');
  let parent = App;

  if (parts[0] === 'App') {
    // parts = parts.slice(1);
    parts.shift();
  }

  for (let i = 0; i < parts.length; i++) {
    if (typeof parent[parts[i]] === 'undefined') {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }

  return parent;
}

let web = App.ns('com.example.web');
console.log(web === App.com.example.web); // true

web.Car = class {
  constructor(color = 'Red') {
    this.color = color;
  }
}

let car = new web.Car();
console.log(car); // { color: 'Red' }
