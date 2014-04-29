var mmult = require('mmult');
var transpose = require('transpose');
var ident = require('./ident');
var mkgivens = require('./mkgivens');

function rotate(b, ij, angle) {
  var dim;

  var givens;

  dim = b.length;

  if (dim < 2) {
    return b;
  }

  givens = mkgivens(dim, ij, angle);

  return mmult(mmult(transpose(givens), b), givens);
}

module.exports = rotate;