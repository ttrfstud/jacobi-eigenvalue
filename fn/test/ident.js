var test = require('taptap');
var assert = require('assert');

var ident = require('../ident');

test(function (done) { /* 1x1 */
  assert.deepEqual(ident(1), [[1]]);
  done();
});  

test(function (done) { /* 2x2 */
  assert.deepEqual(ident(2), [
    [1, 0],
    [0, 1]
  ]);
  done();
});

test(function (done) { /* 4x4 */
  assert.deepEqual(ident(4), [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ])
  done();
});
