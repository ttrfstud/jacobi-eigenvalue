function findij(m) {
  var dim;

  var i, j;
  var max, maxi, maxj;

  dim = m.length;

  if (dim < 2) {
    return void 0;
  }

  max = m[0][1];
  maxi = 0;
  maxj = 1;

  for (i = 0; i < dim; i++) {
    for (j = 0; j < i; j++) {
      if (Math.abs(m[j][i]) > Math.abs(max)) {
        max = m[j][i];
        maxi = j;
        maxj = i;
      }
    }
  }

  return {i: maxi, j: maxj};
}

module.exports = findij;