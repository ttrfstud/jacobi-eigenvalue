var test = require('taptap');
var assert = require('assert');

var offd = require('../offd');

test(function (done) { /* 2x2 */
  var m;

  m = [
    [2, 3],
    [4, 5]
  ];

  assert.equal(offd(m), 25);

  done();
});

test(function (done) { /* 3x3 */
  var m;

  m = [
    [2, 3, 1],
    [4, 5, 1],
    [1, 1, 0]
  ];

  assert.equal(offd(m), 29);

  done();
});
