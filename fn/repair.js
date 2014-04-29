/** Since eigenvalues are continuous relatively to small changes to the matrix,
we can repair symmetricity of matrix after floating point operations */

function repair(m) {
  var dim;
  var i, j;
  var rpm;

  dim = m.length;
  rpm = [];

  for (j = 0; j < dim; j++) {
    for (i = 0; i < j; i++) {
      if (!rpm[i]) {
        rpm[i] = [];
      }

      if (!rpm[j]) {
        rpm[j] = [];
      }

      rpm[i][j] = m[i][j];
      rpm[j][i] = m[i][j];
    }
  }

  for (i = 0; i < dim; i++) {
    rpm[i][i] = m[i][i];
  }

  return rpm;
}

module.exports = repair;