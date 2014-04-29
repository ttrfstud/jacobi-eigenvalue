var mkgivens = require('./mkgivens');
var mmult = require('mmult');

function appendrot(m, ij, angle) {
  var givens;
  var dim;

  dim = m.length;

  if (dim < 2) {
    return m;
  }

  givens = mkgivens(dim, ij, angle);

  return mmult(m, givens);
}

module.exports = appendrot;