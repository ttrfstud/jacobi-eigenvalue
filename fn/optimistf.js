var offd = require('./offd');

function optimistf(m, t) {
  var off;
  var dim;
  var term;

  dim = m.length;

  off = offd(m);

  term = t / (2 * dim - 1);

  return off < (1 / (dim - 1)) * term * term; 
}

module.exports = optimistf;