var promize = require('crazy-promise').from
  , assert = require('assert')
  , whenEveryItem = require('./')
  , values = []
  , result

for (var i = 0; i < 90000; i++) values.push(Math.random())

whenEveryItem(values.map(maybePromize)).then(function(_result) { result = _result })
process.on('exit', function() { assert.deepEqual(result, values) })

function maybePromize(value) {
  return Math.random() < 0.5
        ? value
        : promize(value)
}
