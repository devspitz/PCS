'use strict'; 
const http = require('http');
const fs = require('fs');
let dataListing = [];
let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4]

http.get(url1, url2, url3, (response) => {
    response.on('data', function (data) {
        data.setEncoding('utf-8');
        dataListing.append(data)

    })

    response.on('error', () => {
        console.log('we are having some issues');

    });

    response.on('end', () => {
        dataListing.forEach((data) => console.log(data))

    });


});
