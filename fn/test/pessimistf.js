var test = require('taptap');
var assert = require('assert');

var pessimistf = require('../pessimistf');

test(function (done) { /* not suitable for 2x2 matrices */
  var m;

  m = [
    [1, 20],
    [20, 3]
  ];

  assert.equal(pessimistf(m, .1), 0);

  done();
});

test(function(toby) { /* 3x3 */
  var m;

  m = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
  ];

  assert.equal(pessimistf(m, 0.01), 44);

  toby();
});

test(function (toby) { /* 3x3, t >> 0, neg */
  var m;

  m = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
  ];

  assert.equal(pessimistf(m, 100), -2);

  toby();
});

test(function (toby) { /* 3x3, offd -> 0, neg */
  var m;

  m = [
    [1, 0.0001, 0.0001],
    [0.0001, 2, 0.0001],
    [0.0001, 0.0001, 3]
  ];

  assert.equal(pessimistf(m, 0.01), -8);

  toby();
});