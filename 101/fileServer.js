const fs = require('fs');
const http = require('http');
const path = require('path');
let readStream = fs.createReadStream(process.argv[2], 'utf-8')
let writeStream = fs.createWriteStream(process.argv[3], 'utf-8')

//what to do? rewatch end of file
readStream.pipe(writeStream)

writeStream.on('finish', () => console.log('done'))
writeStream.on('error', err => console.log(err))
readStream.on('error', err => console.log(err))