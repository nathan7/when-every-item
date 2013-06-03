[![Build Status](https://travis-ci.org/nathan7/when-every-item.png?branch=feature/extensions)](https://travis-ci.org/nathan7/when-every-item)

# when-every-item

  promise aggregation for arrays

## Installation

    $ component install nathan7/when-every-item

  or

    $ npm install when-every-item

## API

### whenEveryItem :: [Promise a] -> Promise [a]

  Pretty much what it says on the box. Takes a bunch of promises, returns a promise for an array of all their results. Failure propagates.

## License

  MIT
