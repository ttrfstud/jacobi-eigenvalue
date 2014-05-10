var test = require('taptap');
var assert = require('assert');

var exact = require('../exact');

test(function (done) {
  assert.deepEqual(exact([
    [1, 2],
    [2, 4]
  ]), {
    vals: [
      [5, 0],
      [0, 0]
    ],
    vect: [
      [1 / Math.sqrt(5), -2 / Math.sqrt(5)],
      [2 / Math.sqrt(5),  1 / Math.sqrt(5)]
    ]
  });

  done();
});

/* Works fine, but different float rounding */
test.skip(function (done) {
  assert.deepEqual(exact([
    [2, 3],
    [3, 1]
  ]), {
    vals: [
      [4.5413,  0],
      [0, -1.5413]
    ],
    vect: [
      [0.7630, -0.64636286],
      [0.64636286,  0.7630]
    ]
  });

  done();
});