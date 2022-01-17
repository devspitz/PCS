const path = require('path');//import path.... same thing as require
modules.exports = {
    entry: './src/index.js', //file to start bundling
    output: {
        filename: 'main.js', //name of the bundled file
        path: path.resolve(__dirname, 'dist') //__dirname is the current directory, cuz diff/ for diff brosxers
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            
        ],
    },

};