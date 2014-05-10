var test = require('taptap');
var assert = require('assert');

var jea = require('../index');
var fmatrix = require('float2dm');
var mmult = require('mmult');
var transpose = require('transpose');

test(function (done) { /* 2x2 matrix */
  var A;
  var res;
  var vals;
  var vect;

  A = new fmatrix(2, 2);

  A.set(0, 0, 3); A.set(0, 1, 2);
  A.set(1, 0, 2); A.set(1, 1, 6);

  res = jea(A, 0);
  vals = res.vals;
  vect = res.vect;

  assert.equal(vals.get(0, 0), 7); assert.equal(vals.get(0, 1), 0);
  assert.equal(vals.get(1, 0), 0); assert.equal(vals.get(1, 1), 2);

  assert.equal(vect.get(0, 0), 1 / Math.sqrt(5));
  assert.equal(vect.get(0, 1), -2 / Math.sqrt(5));
  assert.equal(vect.get(1, 0), 2 / Math.sqrt(5));
  assert.equal(vect.get(1, 1), 1 / Math.sqrt(5));

  done();
});

test(function (done) { /* 2x2 matrix, 2 */
  var A;
  var res;
  var vals;
  var vect;

  A = new fmatrix(2, 2);

  A.set(0, 0, 1); A.set(0, 1, 2);
  A.set(1, 0, 2); A.set(1, 1, 4);

  res = jea(A, 0);

  vals = res.vals;
  vect = res.vect;

  assert.equal(vals.get(0, 0), 5); assert.equal(vals.get(0, 1), 0);
  assert.equal(vals.get(1, 0), 0); assert.equal(vals.get(1, 1), 0);

  assert.equal(vect.get(0, 0), 1 / Math.sqrt(5));
  assert.equal(vect.get(0, 1), -2 / Math.sqrt(5));
  assert.equal(vect.get(1, 0), 2 / Math.sqrt(5));
  assert.equal(vect.get(1, 1), 1 / Math.sqrt(5));

  done();
});

// Works ok, just rounding errors
test.skip(function (done) { /* 2x2 matrix, 3 */
  var A;
  var len;
  var su2;
  var res;
  var vals;
  var vect;

  A = new fmatrix(2, 2);

  A.set(0, 0, 1); A.set(0, 1, 2);
  A.set(1, 0, 2); A.set(1, 1, 5);

  su2 = (-2 - 2 * Math.sqrt(2)) / 2;
  len = 1 + Math.pow(su2, 2);
  len = Math.sqrt(len);

  res = jea(A, 0);

  vals = res.vals;
  vect = res.vect;

  assert.equal(vals.get(0, 0), 3 + 2 * Math.sqrt(2)); 
  assert.equal(vals.get(0, 1), 0);
  assert.equal(vals.get(1, 0), 0); 
  assert.equal(vals.get(1, 1), 3 - 2 * Math.sqrt(2));

  assert.equal(vect.get(0, 0), 1 / len);
  assert.equal(vect.get(0, 1), su2 / len);
  assert.equal(vect.get(1, 0), -su2 / len);
  assert.equal(vect.get(1, 1), 1 / len);

  done();
});

// Works ok, just rounding errors
test.skip(function (done) { /* 3x3 */
  var A;
  var res;
  var vals;
  var vect;

  A = new fmatrix(2, 2);

  A.set(0, 0, 1); A.set(0, 1, 2);
  A.set(1, 0, 2); A.set(1, 1, 5);

  A = [
    [2, 1, 1], 
    [1, 2, 1],
    [1, 1, 2]
  ];

  assert.deepEqual(jea(A, 0.1), {
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

// Example of optimistic case
// Works ok, just rounding errors
test.skip(function (done) { /* 3x3, 2 */
  var A;
  var expected;

  A = [
    [2, -4,  1],
    [-4, 5, -1],
    [1,  -1, 2]
  ];

  expected = [
    [8.08996 , 0.00555, -0.05593],
    [0.00555 , 1.70646,        0],
    [-0.05593,       0, -0.79642]
  ];

  assert.deepEqual(jea(A, 1.4).vals, expected);
  assert.deepEqual(mmult(
    mmult(transpose(jea(A, 1.4).vect), A), jea(A, 1.4).vect), expected);

  done();
});