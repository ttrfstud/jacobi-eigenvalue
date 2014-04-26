function ident(n) {
  var i, j;
  var ident;

  ident = [];

  for (i = 0; i < n; i++) {
    ident[i] = [];

    for (j = 0; j < n; j++) {
      ident[i][j] = i === j ? 1 : 0;
    }
  }

  return ident;
}

module.exports = ident;


