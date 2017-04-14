var sample = require('./test/sample.ifer.js')
var Ifer = require('.')

var ifer = new Ifer(sample)
ifer._mount({})
console.log(ifer)
