'use strict';
const http = require('http');
const fs = require('fs');
let dataListing = '';

let fileRead;
http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8');
    response.on('data', function (data) {
dataListing += data;
    })

    response.on('error', () => {
        console.log('we are having some issues');

    });
    response.on('end', ()=>{
        
console.log(dataListing.length);
console.log(dataListing);
    })
})