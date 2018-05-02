let findNodes = function () {
  let i = 1e3;
  let nodes = [];
  let found = {
    style: {
      display: 'block'
    }
  };

  while (i) {
    i--;
    nodes.push[found];
  }

  return nodes;
};


let hide = function (nodes) {
  for (let i = 0, max = nodes.length; i < max; i++) {
    nodes[i].style.display = 'none';
  }
};

hide(findNodes());
