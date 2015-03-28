FactomJS
========


Node.JS wrapper for Factom API

## Installation
 npm install factomjs --save

## Usage

var factomjs = require('factomjs')({host: 'http://demo.factom.org', port: '8088'});

var pubkey = 'wallet';

factomjs.creditbalance(pubkey);

factomjs.buycredit(pubkey, 100);

factomjs.dblocksbyrange(4, 4);

## Tests
 
 npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
