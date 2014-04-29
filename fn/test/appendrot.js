var appendrot = require('../appendrot');
var assert = require('assert');

describe('appendrot', function () {
  it('2x2', function (done) {
    var m
    var ij;
    var angle;

    m = [
      [1, 0],
      [0, 1]
    ]; 

    ij = {i: 0, j: 1};

    angle = { cos: 100, sin: -100 };

    assert.deepEqual(appendrot(m, ij, angle), [
      [100,  100],
      [-100, 100]
    ]);
    done();
  });

  it('3x3', function (done) {
    var m
    var ij;
    var angle;

    m = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]; 

    ij = {i: 0, j: 2};

    angle = { cos: 100, sin: -100 };

    assert.deepEqual(appendrot(m, ij, angle), [
      [100,  0, 100],
      [0  ,  1,   0],
      [-100, 0, 100]
    ]);
    done();
  });
});