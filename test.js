'use strict';

require('mocha');
var assert = require('assert');
var isSelfClosing = require('./');

describe('is-self-closing', function() {
  it('should export a function', function() {
    assert.equal(typeof isSelfClosing, 'function');
  });

  it('should return true when name is a void or sgv element', function() {
    assert(isSelfClosing('img'));
    assert(isSelfClosing('path'));
  });

  it('should work with uppercase names', function() {
    assert(isSelfClosing('IMG'));
    assert(isSelfClosing('PATH'));
  });

  it('should return false when name is a not a void or svg element', function() {
    assert(!isSelfClosing('foo'));
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      isSelfClosing();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected name to be a string');
      cb();
    }
  });
});
