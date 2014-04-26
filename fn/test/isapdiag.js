var assert = require('assert');
var isapdiag = require('../isapdiag');

describe('isapdiag', function () {
  it('yes, 0', function (done) {
    var m = [
      [1, 2, 4,   6],
      [0, 2, 0,   4],
      [0, 0, 10,  0],
      [0, 0, 0, 100]
    ];

    assert(isapdiag(m));

    done();
  });

  it('yes .2', function (done) {
    var m = [
      [1,    .1,  .04,  0 ],
      [0.05, 13,  .1,  .1 ],
      [0,    0,   133, 0.1],
      [0.13, 0.1, 0.1, 32 ]
    ];

    assert(isapdiag(m));

    done(); 
  });

  it('no .1', function (done) {
    var m = [
      [10,  .2,  .04, .1  ],
      [.17, 100, .01, .001],
      [.01, .1,  40,  .1  ],
      [.09, .01, .001, 322]
    ];

    assert(isapdiag(m));

    done();
  });

  it('no .2', function (done) {
    var m = [
      [10,  .2,  .24, .1  ],
      [.17, 100, .01, .001],
      [.01, .1,  40,  .1  ],
      [.09, .01, .001, 322]
    ];

    assert(isapdiag(m));

    done();
  });
});