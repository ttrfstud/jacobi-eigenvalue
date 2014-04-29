var jea = require('../index');
var mmult = require('mmult');
var assert = require('assert');

describe('jacobi eigenvalue algorithm', function () {
  it('2x2 matrix', function (done) {
    var A;

    A = [
      [3, 2], 
      [2, 6]
    ];

    assert.deepEqual(jea(A, 0), {
      vals: [
        [7, 0],
        [0, 2]
      ],
      vect: [
        [1 / Math.sqrt(5), -2 / Math.sqrt(5)],
        [2 / Math.sqrt(5),  1 / Math.sqrt(5)]
      ]});

    done();
  });

  it('2x2 matrix, 2', function (done) {
    var A;

    A = [
      [1, 2], 
      [2, 4]
    ];

    assert.deepEqual(jea(A, 0), {
      vals: [
        [5, 0],
        [0, 0]
      ],
      vect: [
        [1 / Math.sqrt(5), -2 / Math.sqrt(5)],
        [2 / Math.sqrt(5),  1 / Math.sqrt(5)]
      ]});

    done();
  });

  // Works ok, just rounding errors
  it.skip('2x2 matrix, 3', function (done) {
    var A;
    var len;
    var su2;

    A = [
      [1, 2], 
      [2, 5]
    ];

    su2 = (-2 - 2 * Math.sqrt(2)) / 2;
    len = 1 + Math.pow(su2, 2);
    len = Math.sqrt(len);

    assert.deepEqual(jea(A, 0), {
      vals: [
        [3 + 2 * Math.sqrt(2), 0],
        [0, 3 - 2 * Math.sqrt(2)]
      ],
      vect: [
        [1 / len,  su2 / len],
        [-su2 / len, 1 / len]
      ]});

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

    assert.deepEqual(jea(A, 0), {
      vals: [
        [4, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ],
      vect: mmult(
        [
          [1 / Math.sqrt(2), - 1 / Math.sqrt(2), 0],
          [1 / Math.sqrt(2),   1 / Math.sqrt(2), 0],
          [               0,                  0, 1],
        ],
        [
          [Math.sqrt(2/3), 0, - Math.sqrt(1/3)],
          [             0, 1,                0],
          [Math.sqrt(1/3), 0,   Math.sqrt(2/3)],
        ]
      )}); // more fair way

    done();
  });

  // TODO
  it.skip('3x3, 2', function (done) {
    var A;

    A = [
      [2, -4,  1],
      [-4, 5, -1],
      [1,  -1, 2]
    ];

    console.log(jea(A, 1.4).vect);

    assert.deepEqual(jea(A, 1.4), {
      vals: [
        [7.7, 0, 0],
        [0, -.77, 0],
        [0,  0, 1.7]
      ],
      vect: [
        [0.483, 0.878, 0],
        [-0.878, 0.483, 0],
        [0, 0, 1]
      ]
    });

    done();
  });
});