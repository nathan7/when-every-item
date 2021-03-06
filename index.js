var Promise = require('promise')
  , isPromise = require('is-promise')

module.exports = function whenEveryItem(promises) {
  if (isPromise(promises)) return promises.then(promises)
  return new Promise(function(resolve, reject) {
    if (!promises.length)
      return resolve([])
    var len = promises.length
      , results = new Array(len)
      , done = 0
      , promise
    for (var i = 0; i < len; i++) {
      promise = promises[i]
      if (isPromise(promise))
        promises[i].then(handler(i), reject)
      else {
        results[i] = promise
        done++
      }
    }
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
