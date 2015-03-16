var request = require('superagent');
var Deferred = require('./deferred');
var map = require('lodash/collection/map');

function ajax(url, opts) {
  var dfd = new Deferred();
  var method = opts.type || 'GET';
  var type = opts.dataType || 'json';
  var req = request[method.toLowerCase()](url);

  req.type(type);

  if (opts.headers) {
    map(function(val, key) {
      req.set(key, val);
    })
  }

  req.end(function(err, resp) {
    if (err) {
      return dfd.reject(err);
    }
    return dfd.resolve(resp);
  });
  return dfd.promise();
}
