var assert = require('assert');
var ident = require('../ident');

describe('ident returns identity matrix of dim n', function () {
  it('1x1', function (done) {
    assert.deepEqual(ident(1), [[1]]);
    done();
  });  

  it('2x2', function (done) {
    assert.deepEqual(ident(2), [
      [1, 0],
      [0, 1]
    ]);
    done();
  });

  it('4x4', function (done) {
    assert.deepEqual(ident(4), [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ])
    done();
  });
});