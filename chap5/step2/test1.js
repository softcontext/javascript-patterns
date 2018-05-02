const {App} = require('./common');

App.ns('com.example.util');

App.com.example.util.data = (function () {
  return {
    a: 10
  };
})();

console.log(App.com.example.util.data);
