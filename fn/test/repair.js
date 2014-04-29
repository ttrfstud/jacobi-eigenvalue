var assert = require('assert');
var repair = require('../repair');

describe('repair', function () {
  it('already symmetric, 3x3', function (done) {
    var m;

    m = [
      [1, 3, 5],
      [3, 2, 0],
      [5, 0, 4]
    ];

    assert.notEqual(repair(m), m);
    assert.deepEqual(repair(m), m);

    done();
  });

  it('not symmetric, 3x3', function (done) {
    var m;

    m = [
      [1, 1e-10, 0],
      [0, 10000, 0],
      [0, 0    , 1]
    ];

    assert.deepEqual(repair(m), [
      [1,     1e-10, 0],
      [1e-10, 10000, 0],
      [0,     0,     1]
    ]);

    done();
  });

  it('not symmetric, 2x2', function (done) {
    var m;

    m = [
      [1, 1e-16],
      [0, 2    ]
    ];

    assert.deepEqual(repair(m), [
      [1, 1e-16],
      [1e-16, 2]
    ]);

    done();
  });
});