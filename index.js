const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')

    // 1st method
    // const db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error'));
    // db.once('open', function () {
    //     console.log('CONNECTION OPEN ')
    // });


    // 2nd method
    .then(() => {
        console.log('CONNENTION OPEN!!!')
    })
    .catch(err => {
        console.log("ON ON ERROR!!!")
        console.log(err)
    })