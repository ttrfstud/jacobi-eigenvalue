/** Exact calculations for the case of 2x2 matrices **/
function exact(m) {
  var a;
  var b;
  var d;

  var muplus, muminus;

  var sum, dif;

  var root;
  var vals, vect;

  var u1, u2, len;

  a = m[0][0];
  b = m[0][1];
  d = m[1][1];

  sum = (a + d) / 2;
  dif = (a - d) / 2;

  root = Math.sqrt(b * b + dif * dif);

  muplus = sum + root;
  muminus = sum - root;

  vals = [
    [muplus,  0],
    [0, muminus]
  ];

  a -= muplus;

  u1 = 1;
  u2 = a / b;

  len = Math.sqrt(u1 * u1 + u2 * u2);

  u1 /= len;
  u2 /= len;

  vect = [
    [u1,  u2],
    [-u2, u1]
  ];

  return {
    vals: vals,
    vect: vect
  };
}

module.exports = exact;