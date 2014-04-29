var mkgivens = require('../mkgivens');
var assert = require('assert');

describe('mkgivens', function () {
  it('2x2', function (done) {
    var angle;
    var ij;
    var givens;

    angle = {cos: 100, sin: -100};
    ij = {i: 0, j: 1};
    givens = mkgivens(2, ij, angle);

    assert.deepEqual(givens, [
      [100,  100],
      [-100, 100]
    ]);
    done();
  });

  it('3x3', function (done) {
    var angle;
    var ij;
    var givens;

    angle = {cos: 100, sin: -100};
    ij = {i: 0, j: 2};
    givens = mkgivens(3, ij, angle);

    assert.deepEqual(givens, [
      [100,  0, 100],
      [0  ,  1,   0],
      [-100, 0, 100]
    ]);
    done();
  });
});