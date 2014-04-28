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
      console.log('max', max, m[j][i]);
      if (Math.abs(m[j][i]) > max) {
        console.log('set max', max, m[j][i], j, i);
        max = m[j][i];
        maxi = j;
        maxj = i;
      }
    }
  }

  return {i: maxi, j: maxj};
}

module.exports = findij;