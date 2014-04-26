var jea = require('../index');
var assert = require('assert');

describe('jacobi eigenvalue algorithm', function () {
  it.skip('2x2 matrix', function (done) {
    var A;

    A = [
      [3, 2], 
      [2, 6]
    ];

    assert.deepEqual(jea(A, 0), [7, 2]);

    done();
  });

  it('2x2 matrix, 2', function (done) {
    var A;

    A = [
      [1, 2], 
      [2, 4]
    ];

    assert.deepEqual(jea(A, 0), [5, 5]);

    done();
  });
});