/*
 * typeahead.js
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

var Deferred = require('./deferred');
var request = require('superagent');

var _ = (function() {
  'use strict';

  return {

    ajax: require('./ajax'),

    Deferred: function(callback) {
      return new Deferred(callback);
    },

    isBrowser: function() {
      return !!navigator;
    },

    isMsie: function() {
      // from https://github.com/ded/bowser/blob/master/bowser.js
      if (!_.isBrowser()) return false;
      return (/(msie|trident)/i).test(navigator.userAgent) ?
        navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
    },

    isBlankString: function(str) { return !str || /^\s*$/.test(str); },

    // http://stackoverflow.com/a/6969486
    escapeRegExChars: function(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    },

    isString: require('lodash/lang/isString'),

    isNumber: require('lodash/lang/isNumber'),

    isArray: require('lodash/lang/isArray'),

    isFunction: require('lodash/lang/isFunction'),

    isObject: require('lodash/lang/isPlainObject'),

    isUndefined: require('lodash/lang/isUndefined'),

    toStr: function toStr(s) {
      return (_.isUndefined(s) || s === null) ? '' : s + '';
    },

    bind: require('lodash/function/bind'),

    each: require('lodash/collection/each'),

    map: require('lodash/collection/each'),

    filter: require('lodash/collection/filter'),

    every: require('lodash/collection/every'),

    some: require('lodash/collection/some'),

    mixin: require('lodash/utility/mixin'),

    getUniqueId: (function() {
      var counter = 0;
      return function() { return counter++; };
    })(),

    templatify: function templatify(obj) {
      return _.isFunction(obj) ? obj : template;

      function template() { return String(obj); }
    },

    defer: function(fn) { setTimeout(fn, 0); },

    debounce: require('lodash/function/debounce'),

    throttle: require('lodash/function/throttle'),

    noop: function() {}
  };
})();

module.exports = _;
