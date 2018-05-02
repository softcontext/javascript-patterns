var App = App || {};

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

module.exports = {
  App
}
