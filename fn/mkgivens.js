var ident = require('./ident');

function mkgivens(dim, ij, angle) {
  var givens;

  givens = ident(dim);

  givens[ij.i][ij.i] = angle.cos;
  givens[ij.i][ij.j] = -angle.sin;
  givens[ij.j][ij.j] = angle.cos;
  givens[ij.j][ij.i] = angle.sin;

  return givens;
}

module.exports = mkgivens;