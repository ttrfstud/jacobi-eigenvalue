var assert = require('assert');

module.exports = function (m, t) {
  var dim;

  var b;
  var ij;
  var angle;

  var i, j;

  var eigenv;

  assertdim(m);
  assertsym(m);

  dim = m.length;

  if (dim === 1) {
    return m;
  }

  b = copy(m);

  while (!lookslikediag(b, t)) {
    ij = findij(m);
    console.log(ij);

    angle = findangle(b, ij);
    b = rotate(b, dim, ij, angle);
  }

  eigenv = [];

  for (i = 0; i < dim; i++) {
    eigenv[i] = b[i][i];
  }

  return eigenv;
};