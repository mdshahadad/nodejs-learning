const { a, add } = require('./local.js')
const { a: a2, add: add2 } = require('./local-1.js')

console.log(add(2, 3), add2(2, 3, 5));


//Built in module
const path = require('path');

console.log(path.join("C:/levelTwo-web-dev/nodejs-practice/", "local.js"))
