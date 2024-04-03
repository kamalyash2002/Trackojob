const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

async function connect(url){
    return mongoose.connect(url) ;
}

module.exports = connect;