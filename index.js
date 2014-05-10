var assert = require('assert');

var copy = require('./fn/copy');
var findangle = require('./fn/findangle');
var findij = require('./fn/findij');
var rotate = require('./fn/rotate');
var ident = require('./fn/ident');
var appendrot = require('./fn/appendrot');
var pessimistf = require('./fn/pessimistf');
var optimistf = require('./fn/optimistf');
var repair = require('./fn/repair');
var exact = require('./fn/exact');

function jae(m, t) {
  var dim;

  var b, v;
  var ij;
  var angle;

  var i, j;

  var eigen;

  var pfcast;

  assert(m);
  assert(t !== void 0);

  dim = m.rows;

  if (dim === 1) {
    return m;
  }

  if (dim === 2) {
    return exact(m);
  }

  b = copy(m);
  v = ident(dim);

  pfcast = pessimistf(m, t);

  while (pfcast-- > 0) {
    ij = findij(b);
    angle = findangle(b, ij);
    b = rotate(b, ij, angle);
    v = appendrot(v, ij, angle);

    b = repair(b);

    if (optimistf(b, t)) {
      break;
    }
  }

  eigen = {
    vals: b,
    vect: v
  };

  return eigen;
}

module.exports = jae;