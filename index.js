var assert = require('assert');

var copy = require('./fn/copy');
var findangle = require('./fn/findangle');
var findij = require('./fn/findij');
var isapdiag = require('./fn/isapdiag');
var rotate = require('./fn/rotate');

function jae(m, t) {
  var dim;

  var b;
  var ij;
  var angle;

  var i, j;

  var eigenv;

  assert(m);
  assert(t !== void 0);

  dim = m.length;

  if (dim === 1) {
    return m;
  }

  b = copy(m);

  while (!isapdiag(b, t)) {
    ij = findij(b);
    console.log(ij);
    angle = findangle(b, ij);
    if (!angle) {
      break;
    }
    console.log(angle);
    console.log('bifo', b)
    b = rotate(b, ij, angle);
    console.log('afta', b);
  }

  eigenv = [];

  for (i = 0; i < dim; i++) {
    eigenv[i] = b[i][i];
  }

  return eigenv;
}

module.exports = jae;