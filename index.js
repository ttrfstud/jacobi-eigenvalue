var assert = require('assert');

var THRESHOLD;

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

function findij(m) {
  var i, j;
  var max, maxi, maxj;

  max = m[0][0];

  for (i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
      if (Math.abs(m[j][i]) > max) {
        max = m[j][i];
        maxi = j;
        maxj = i;
      }
    }
  }

  return {i: maxi, j: maxj};
}

THRESHOLD = .1;

function lookslikediag(b) {
  var violated;
  var i, j;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i - j && Math.abs(b[i][j]) > THRESHOLD) {
        return false;
      }
    }
  }

  return true;
}

function findangle(m, ij) {
  var mii, mij, mji, mjj;

  var muplus;
  var sum, dif, root;

  var u1, u2;

  var len;

  mii = m[i][i];
  mij = m[i][j];
  mji = m[j][i];
  mjj = m[j][j];

  assert(mji === mij);

  sum = (mii + mjj) / 2;
  dif = (mii - mjj) / 2;

  root = Math.sqrt(mji * mji + dif * dif);

  muplus = sum + root;

  mii = mii - muplus;

  // r1 = mii, mij => r1ort = 1, mii/mij

  u1 = 1;
  u2 = mii / mij;

  len = Math.sqrt(u1 * u1 + u2 * u2);

  u1 /= len;
  u2 /= len;

  return { cos: u1, msin: u2 };
}

function rotate(b, angle) {
  
}

module.exports = function (m, n, t) {
  var b;
  var ij;
  var angle;

  var i, j;

  var eigenv;

  assertdim(m, n);
  assertsym(m);

  b = copy(m);

  while (!lookslikediag(b, t)) {
    ij = findij(m);
    angle = findangle(b, ij);
    b = rotate(b, angle);
  }

  for (i = 0; i < n; i++) {
    eigenv[i] = b[i][i];
  }

  return eigenv;
};