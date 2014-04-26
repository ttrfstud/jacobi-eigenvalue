/**"is approximately diagonal"**/

function isapdiag(b, t) {
  var dim;

  var violated;
  var i, j;

  dim = b.length;

  for (i = 0; i < dim; i++) {
    for (j = 0; j < dim; j++) {
      if (i !== j && Math.abs(b[i][j]) > t) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isapdiag;