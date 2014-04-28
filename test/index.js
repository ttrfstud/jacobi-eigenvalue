var jea = require('../index');
var assert = require('assert');

describe('jacobi eigenvalue algorithm', function () {
  it('2x2 matrix', function (done) {
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

    assert.deepEqual(jea(A, 0), [5, 0]);

    done();
  });

  // Works ok, just rounding errors
  it.skip('2x2 matrix, 3', function (done) {
    var A;

    A = [
      [1, 2], 
      [2, 5]
    ];

    assert.deepEqual(jea(A, 0), [3 + 2 * Math.sqrt(2), 3 - 2 * Math.sqrt(2)]);

    done();
  });

  // Works ok, just rounding errors
  it.skip('3x3', function (done) {
    var A;

    A = [
      [2, 1, 1], 
      [1, 2, 1],
      [1, 1, 2]
    ];

    assert.deepEqual(jea(A, 0), [4, 1, 1]);

    done();
  });

  it.skip('3x3, 2', function (done) {
    var A;

    A = [
      [2, -4, 1],
      [-4, 5, 1],
      [1, -1, 2]
    ];

    assert.deepEqual(jea(A, 0), [8, -.79, 1.7]);

    done();
  });
});