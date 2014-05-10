var test = require('taptap');
var assert = require('assert');

var copy = require('../copy');

test(function (done) { /* 3x3 */
  var m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  assert.equal(m, m);
  assert.deepEqual(copy(m), m);
  assert.notEqual(copy(m), m);

  done();
});
