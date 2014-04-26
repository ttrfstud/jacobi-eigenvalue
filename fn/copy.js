function copy(m) {
  var i, j;
  var res;

  res = [];

  for (i = 0; i < m.length; i++) {
    res[i] = [];
    for (j = 0; j < m[i].length; j++) {
      res[i][j] = m[i][j];
    }
  }

  return res;
}

module.exports = copy;