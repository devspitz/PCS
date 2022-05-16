'use strict';
const http = require('http');

//let dataListing = [];

http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8');
    response.on('data', function (data) {
    

        console.log(data);
    })
    response.on('error', () => {
        console.log('we are having some issues');

    });
    // response.on('end', () => {
    //   dataListing.forEach((data) => console.log(data))
    //});
})