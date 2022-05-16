const fs = require('fs');

let fileRead = fs.readFile(process.argv[2], 'utf-8',(err, data)=>{
if (err) {
    console.log('we are having some issues');
}
   console.log( data.split('\n').length - 1);
   
});

