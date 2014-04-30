var assert = require('assert');
var offd = require('../offd');

describe('offd', function () {
  it('2x2', function (done) {
    var m;

    m = [
      [2, 3],
      [4, 5]
    ];

    assert.equal(offd(m), 25);

    done();
  });

  it('3x3', function (done) {
    var m;

    m = [
      [2, 3, 1],
      [4, 5, 1],
      [1, 1, 0]
    ];

    assert.equal(offd(m), 29);

    done();
  });
});