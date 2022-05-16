const fs = require('fs');


let fileRead = fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        console.log('we are having some issues');
    }
  let newList =  list.filter((file) => file.endsWith(`.${process.argv[3]}`));
    newList.forEach((list)=>console.log(list))

});

