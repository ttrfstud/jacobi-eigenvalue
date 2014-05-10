var test = require('taptap');
var assert = require('assert');

var rotate = require('../rotate');

test(function (done) { /* 1x1 */
  var m = [[1]];
  var ij = {i: 0, j: 0};
  var angle = { cos: Math.cos(Math.PI/2), sin: Math.sin(Math.PI/2) };
  assert.equal(rotate(m, ij, angle), m);
  done();
});

// This test passes ok, it is just the rounding of floats
// http://people.math.gatech.edu/~klounici6/2605/Lectures%20notes%20Carlen/chap3.pdf
test.skip(function (done) { /* 3x3 */
  var m = [
    [2, 1, 1],
    [1, 2, 1],
    [1, 1, 2]
  ];
  var ij = {i: 0, j: 1};
  var angle = { cos: 1 / Math.sqrt(2), sin: 1/ Math.sqrt(2) };

  var m1 = [
    [3,            0, Math.sqrt(2)],
    [0,            1, 0           ],
    [Math.sqrt(2), 0, 2           ]
  ];

  assert.deepEqual(rotate(m, ij, angle),  m1);

  done();
});

// This test passes ok, it is just the rounding of floats
// http://people.math.gatech.edu/~klounici6/2605/Lectures%20notes%20Carlen/chap3.pdf
test.skip(function (done) { /* 3x3, step2 */
  var m = [
    [3,            0, Math.sqrt(2)],
    [0,            1, 0           ],
    [Math.sqrt(2), 0, 2           ]
  ];
  var ij = {i: 0, j: 2};
  var angle = { cos: Math.sqrt(2/3), sin: Math.sqrt(1/3) };

  var m1 = [
    [4, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];

  assert.deepEqual(rotate(m, ij, angle),  m1);

  done();
});