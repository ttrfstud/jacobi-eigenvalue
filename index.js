var assert = require('assert');

function assertdim(m, n) {
  var i;

  assert(m.length === n);

  for (i = 0; i < m.length; i++) {
    assert(m[i].length === n);
  }
}

function assertsym(m) {
  var i, j;

  for (i = 0; i < m.length; i++) {
    for (j = 0; j < m[i].length; j++) {
      assert(m[i][j] === m[j][i]);
    }
  }
}

function copy(m) {
  var i, j;
  var res;

  res = [];

  for (i = 0; i < m.length; i++) {
    res[i] = [];
    for (j = 0; j < m[i].length; j++) {
      res[i][j] = m[i][j];
    }
  }

  return res;
}

function idnt(n) {
  var i, j;
  var ident;

  for (i = 0; i < n; i++) {
    ident[i] = [];

    for (j = 0; j < n; j++) {
      ident[i][j] = i === j ? 1 : 0;
    }
  }

  return ident;
}

module.exports = function (m, n) {
  var b, v;

  assertdim(m, n);
  assertsym(m);

  b = copy(m);
  v = idnt(n);


};