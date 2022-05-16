const fs = require('fs');

let fileRead = fs.readFileSync(process.argv[2]).toString();

let splitLines = fileRead.split('\n');//-1

counter = 0;

for (let index = 1; index < splitLines.length; index++) {

    counter++;

}

console.log(counter);