let findNodes = function(cb) {
  let i = 1e3;
  let nodes = [];
  let found = {
    style: {
      display: 'block'
    }
  };

  if (typeof cb !== 'function') {
    cb = false;
  }

  while (i) {
    i--;

    if (cb) {
      cb(found);
    }

    nodes.push[found];
  }

  return nodes;
};

let hide = function(elem) {
  elem.style.display = 'none';
};

findNodes(hide);
