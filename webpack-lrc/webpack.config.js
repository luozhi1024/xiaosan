const path = require('path');
module.exports = {
    mode:'development',
    entry:{
        index: './src/index.js',
        index2: '.src/index2.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename : '[name].js'
    },
    module:{},

    plugins:[],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081
    }
};