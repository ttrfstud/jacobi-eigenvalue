var mmult = require('mmult');
var transpose = require('./transpose');
var ident = require('./ident');

function rotate(b, ij, angle) {
  var dim;

  var givens;

  dim = b.length;

  if (dim < 2) {
    return b;
  }

  givens = ident(dim);

  givens[ij.i][ij.i] = angle.cos;
  givens[ij.i][ij.j] = -angle.sin;
  givens[ij.j][ij.j] = angle.cos;
  givens[ij.j][ij.i] = angle.sin;

  return mmult(mmult(transpose(givens), b), givens);
}

module.exports = rotate;