var assert = require('assert');
var copy = require('../copy');

describe('copy creates copy of matrix', function () {
  it('3x3', function (done) {
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
});