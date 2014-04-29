function offd(m) {
  var off;
  var dim;
  var i, j;

  dim = m.length;

  off = 0;

  for (i = 0; i < dim; i++) {
    for (j = 0; j < dim; j++) {
      if (i !== j) {
        off += m[i][j] * m[i][j];
      }
    }
  }

  return off;
}

module.exports = offd;