var pessimistf = require('../pessimistf');
var assert = require('assert');

describe('pessimistf', function () {
  it('not suitable for 2x2 matrices', function (done) {
    var m;

    m = [
      [1, 20],
      [20, 3]
    ];

    assert.equal(pessimistf(m, .1), 0);

    done();
  });

  it('3x3', function(toby) {
    var m;

    m = [
      [1, 2, 3],
      [2, 4, 5],
      [3, 5, 6]
    ];

    assert.equal(pessimistf(m, 0.01), 44);

    toby();
  });

  it('3x3, t >> 0, neg', function (toby) {
    var m;

    m = [
      [1, 2, 3],
      [2, 4, 5],
      [3, 5, 6]
    ];

    assert.equal(pessimistf(m, 100), -2);

    toby();
  });

  it('3x3, offd -> 0, neg', function (toby) {
    var m;

    m = [
      [1, 0.0001, 0.0001],
      [0.0001, 2, 0.0001],
      [0.0001, 0.0001, 3]
    ];

    assert.equal(pessimistf(m, 0.01), -8);

    toby();
  });
});