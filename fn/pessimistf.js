var offd = require('./offd');

function ln(n) {
  return Math.log(n);
}

function pessimistf(m, t) {
  var dim;
  var off;
  var steps;
  var term;

  dim = m.length;
  off = offd(m);
  term = dim * dim - dim;

  steps = (ln(off) + ln(dim - 1) - 2 * ln(t) + 2 * ln(2 * dim - 1)) /
  (ln(term) - ln(term - 2));

  steps = Math.ceil(steps);

  return steps;
}

module.exports = pessimistf;