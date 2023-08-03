const fs = require('fs');
// fs = file system
fs.writeFile('hello.txt', 'hello world!', (err) => {
    console.log('done!');
})