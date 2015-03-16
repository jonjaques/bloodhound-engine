var Promise = require('es6-promise').Promise;
var isFunction = require('lodash/lang/isFunction');
var toArray = require('lodash/lang/toArray');
var assign = require('lodash/object/assign');

function Deferred(callback) {
  var self = this;
  this._promise = new Promise(function(resolve, reject) {
    self._resolve = resolve;
    self._reject = reject;
    if (isFunction(callback)) {
      callback(self);
    }
  });

  this.done = this.always = this._promise.then;
  this.fail = this._promise.catch;
}

assign(Deferred.prototype, {
  resolve: function() {
    this._resolve.apply(this._promise, arguments);
    return this;
  },
  reject: function() {
    this._reject.apply(this._promise, arguments);
    return this;
  },
  promise: function() {
    return this._promise;
  },
  then: function() {
    this._promise.then.apply(this._promise, toArray(arguments));
    return this;
  },
  done: function() {
    this._promise.then.apply(this._promise, toArray(arguments));
    return this;
  },
  fail: function() {
    this._promise.catch.apply(this._promise, toArray(arguments));
    return this;
  },
  always: function() {
    this._promise.then.apply(this._promise, toArray(arguments));
    return this;
  }
})


module.exports = Deferred;
