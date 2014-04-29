var assert = require('assert');

var copy = require('./fn/copy');
var findangle = require('./fn/findangle');
var findij = require('./fn/findij');
var isapdiag = require('./fn/isapdiag');
var rotate = require('./fn/rotate');
var ident = require('./fn/ident');
var appendrot = require('./fn/appendrot');

function jae(m, t) {
  var dim;

  var b, v;
  var ij;
  var angle;

  var i, j;

  var eigen;

  assert(m);
  assert(t !== void 0);

  dim = m.length;

  if (dim === 1) {
    return m;
  }

  b = copy(m);
  v = ident(dim);

  while (!isapdiag(b, t)) {
    ij = findij(b);
    angle = findangle(b, ij);
    if (!angle) {
      break;
    }
    b = rotate(b, ij, angle);
    v = appendrot(v, ij, angle);
  }

  eigen = {
    vals: b,
    vect: v
  };

  return eigen;
}

module.exports = jae;