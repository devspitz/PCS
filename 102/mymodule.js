const fs = require('fs');

module.exports = function (directoryName, fileExtension, callback) {
    let file = fs.readdir(directoryName);
    if (err) {
        callback(err);
    } 
        let newList = file.filter((file) => file.endsWith(`.${fileExtension}`));
        callback(null, newList)
};


