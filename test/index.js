var jea = require('../index');
var assert = require('assert');

describe('jacobi eigenvalue algorithm', function () {
  it('2x2 matrix', function (done) {
    var A;

    A = [
      [3, 2], 
      [2, 6]
    ];

    console.log(jea(A, 0));

    assert.deepEqual(jea(A, 0), [7, 2]);

    done();
  });
});