var assert = require('assert');
var findij = require('../findij');

describe('findij finds position of largest element above main diagonal', function () {
  it('1x1', function (done) {
    assert.equal(findij([[1]]), void 0);
    done();
  });

  it('2x2', function (done) {
    assert.deepEqual(findij([
      [1, 2],
      [3, 4]
    ]), {i: 0 , j: 1 });
    done();
  });

  it('2x2, 2', function (done) {
    // TODO
    done();
  });

  it('4x4', function (done) {
    assert.deepEqual(findij([
      [1, 2, 4, 6],
      [3, 4, 5, 1],
      [1, 5, 6, 3],
      [7, 1, 8, 1]
    ]), {i: 0, j: 3});
    done();
  });
});