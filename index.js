'use strict';

var selfClosing = require('self-closing-tags');

module.exports = function(name) {
  if (typeof name !== 'string') {
    throw new TypeError('expected name to be a string');
  }
  return selfClosing.indexOf(name) !== -1;
};
