const router = require('express').Router();
const pool =require('../modules/pool.js');

//post movie to database
router.post('/', (req, res) => {
    console.log('POST/MOVIES',req.body);
    const movieToAdd = req.body;
    let queryText = `INSERT INTO "movies" ("name", "pic", "date", "length", "genre_id")
                                VALUES ($1, $2, $3, $4, $5);`;

    pool.query(queryText, [movieToAdd.name, movieToAdd.pic, movieToAdd.date, movieToAdd.length, movieToAdd.genre_id])
    .then( (result) => {
    res.sendStatus(201);
    }).catch((error) => {
        console.log('Failed IN movies POST', error);
        res.sendStatus(500);
    });
});

//get all movies from database
router.get('/', (req, res) => {
    console.log('GET/movies router');
    //table binding here
    const queryText= `SELECT "m"."name" as "movie_name",
                                "m"."pic" as "movie_pic",
                                "m"."date" as "movie_date",
                                "m"."length" as "movie_length",
                                "g"."genre" as "genre"
                                FROM "movies" as "m" JOIN "Genre" as "g"
                                ON "m"."genre_id" = "g"."id";`;
                                console.log('logging after get info');
    pool.query(queryText).then((result) => {
        res.send(result.rows);
        console.log(result.rows);
    }).catch(error => {
        console.log('error GET movies Router', error);
        res.sendStatus(500);
    });
});
module.exports = router;