"use strict";

var fs = require('fs');
// fs = file system
fs.writeFile('hello.txt', 'hello world!', function (err) {
  console.log('done!');
});