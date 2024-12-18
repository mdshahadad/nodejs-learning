const fs = require('fs');

//reading text
const readText = fs.readFileSync('./read.txt', 'utf8');

// console.log(readText);

//writing a text
const writtenText = fs.writeFileSync('./write.txt', readText + 'This is a my written text')

// console.log(writtenText);


// File system asynchronous
fs.readFile('./read.txt', 'utf8', (err, data) => {
    if (err) {
        throw Error('Error when try to read text');
    }
    console.log('Reading text')

    fs.writeFile('./write2.txt', data, 'utf8', (err) => {
        if (err) {
            throw Error('Error when writing data');
        }
    });

    console.log('writing text after reading')

});

console.log('testing................')