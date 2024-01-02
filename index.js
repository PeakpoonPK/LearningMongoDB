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

// {
//     title: 'Amadeus',
//         year: 1986,
//             score: 9.2,
//                 rating: "R"

// }

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String

});

const Movie = mongoose.model('Movie', movieSchema)
// const amadeus = new Movie({ title: "Amadeus", year: 1986, score: 9.2, rating: "R" })

// const blah = new  Movie();
// blah.save()

Movie.insertMany([
    { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
    { title: "Alien", year: 1979, score: 8.1, rating: "R" },
    { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
    { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
    { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" }
])

    .then(data => {
        console.log("IT WORK!")
        console.log(data)
    })