var optimistf = require('../optimistf');
var assert = require('assert');

describe('optimistf', function () {
  it('obvious false case', function (done) {
    var m;

    m = [
      [2, 100],
      [100, 1]
    ];

    assert.equal(optimistf(m, .1), false);

    done();
  });

  it('obvious true case', function (done) {
    var m;

    m = [
      [2, 0.1],
      [0.1, 1]
    ];

    assert.equal(optimistf(m, 100), true);

    done();
  });

  it('less obvious true case', function (done) {
    var m;

    m = [
      [2, 0.02],
      [0.02, 1]
    ];

    assert.equal(optimistf(m, 0.1), true);

    done();
  });

  it('less obvious false case', function (done) {
    var m;

    m = [
      [2, 0.03],
      [0.02, 1]
    ];

    assert.equal(optimistf(m, 0.1), false);

    done();
  });
});