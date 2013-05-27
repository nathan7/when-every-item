var Promise = require('promise')
module.exports = function whenEveryItem(promises) {
  return new Promise(function(resolve, reject) {
    if (!promises.length)
      return resolve([])
    var len = promises.length
      , results = Array(len)
      , done = 0
    for (var i = 0; i < len; i++)
      promises[i].then(handler(i), reject)
    function handler(i) {
      var called = false
      return function(result) {
        if (called) return
        called = true
        results[i] = result
        if (++done === promises.length)
          resolve(results)
      }
    }
  })
}
