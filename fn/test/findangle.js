var test = require('taptap');
var assert = require('assert');

var findangle = require('../findangle');

test(function (done) { /* 2x2 */
  var m = [
    [3, 2],
    [2, 6]
  ];
  var ij = {i: 0, j: 1};

  assert.deepEqual(findangle(m, ij), { cos: 1 / Math.sqrt(5), sin: 2 / Math.sqrt(5) });

  done();
});

test(function (done) { /* 2x2 */
  var m = [
    [1, 2],
    [2, 4]
  ];
  var ij = {i: 0, j: 1};

  assert.deepEqual(findangle(m, ij), { cos: 1 / Math.sqrt(5), sin: 2 / Math.sqrt(5) });

  done();
});

test(function (done) { /* 2x2 failover */
  var m = [
    [1, .0000000000000000000000000000001],
    [0, 4]
  ];
  var ij = {i: 0, j: 1};

  assert.deepEqual(findangle(m, ij), 0);

  done();
});

test('5x5', function (done) { /* 5x5 */
  var m = [
    [1, 0, 0, 0, 0],
    [0, 1, 2, 0, 0],
    [3, 2, 4, 0, 0],
    [4, 1, 9, 3, 4],
    [1, 2, 4, 0, 3],
  ];
  var ij = {i: 1, j: 2};

  assert.deepEqual(findangle(m, ij), { cos: 1 / Math.sqrt(5), sin: 2 / Math.sqrt(5) });

  done();
});
