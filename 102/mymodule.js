const fs = require('fs');

module.exports = function (directoryName, fileExtension, callback) {
    fs.readdir(directoryName, (err, data) => {

        if (err) {
            return callback(err);
        }

        let newList = data.filter((file) => file.endsWith(`.${fileExtension}`));//.?
        callback(null, newList)
    })
};


