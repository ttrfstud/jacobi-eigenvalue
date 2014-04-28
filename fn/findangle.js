var assert = require('assert');

function findangle(m, ij) {
  var mii, mij, mji, mjj;

  var muplus;
  var sum, dif, root;

  var u1, u2;

  var len;

  mii = m[ij.i][ij.i];
  mij = m[ij.i][ij.j];
  mji = m[ij.j][ij.i];
  mjj = m[ij.j][ij.j];

  if (mji !== mij) {
    return 0;
  }

  sum = (mii + mjj) / 2;
  dif = (mii - mjj) / 2;

  root = Math.sqrt(mji * mji + dif * dif);

  muplus = sum + root;
  muminus = sum - root;
  mii = mii - muplus;

  // r1 = mii, mij => r1ort = 1, mii/mij

  u1 = 1;
  u2 = mii / mij;

  len = Math.sqrt(u1 * u1 + u2 * u2);

  u1 /= len;
  u2 /= len;

  return { cos: u1, sin: -u2 };
}

module.exports = findangle;