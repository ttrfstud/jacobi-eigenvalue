var test = require('taptap');
var assert = require('assert');

var optimistf = require('../optimistf');

test(function (done) { /* obviously false */
  var m;

  m = [
    [2, 100],
    [100, 1]
  ];

  assert.equal(optimistf(m, .1), false);

  done();
});

test(function (done) { /* obviously true */
  var m;

  m = [
    [2, 0.1],
    [0.1, 1]
  ];

  assert.equal(optimistf(m, 100), true);

  done();
});

test(function (done) { /* less obvious true case */
  var m;

  m = [
    [2, 0.02],
    [0.02, 1]
  ];

  assert.equal(optimistf(m, 0.1), true);

  done();
});

test(function (done) { /* less obvious false case */
  var m;

  m = [
    [2, 0.03],
    [0.02, 1]
  ];

  assert.equal(optimistf(m, 0.1), false);

  done();
});
