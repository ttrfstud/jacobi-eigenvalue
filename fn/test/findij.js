var test = require('taptap');
var assert = require('assert');

var findij = require('../findij');

test(function (done) { /* 1x1 */
  assert.equal(findij([[1]]), void 0);
  done();
});

test(function (done) { /* 2x2 */
  assert.deepEqual(findij([
    [1, 2],
    [3, 4]
  ]), {i: 0 , j: 1 });
  done();
});

test(function (done) { /* 2x2, 2 */
  assert.deepEqual(findij([
    [1 ,-.1, 0],
    [-.1, 1, 0],
    [ 0,  0, 1]
  ]), {i : 0, j : 1});
  done();
});

test(function (done) { /* 4x4 */
  assert.deepEqual(findij([
    [1, 2, 4, 6],
    [3, 4, 5, 1],
    [1, 5, 6, 3],
    [7, 1, 8, 1]
  ]), {i: 0, j: 3});
  done();
});
