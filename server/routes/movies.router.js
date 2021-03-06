const router = require('express').Router();
const pool =require('../modules/pool.js');

//post movie to database
router.post('/', (req, res) => {
    console.log('POST/MOVIES',req.body);
    const movieToAdd = req.body;
    let queryText = `INSERT INTO "movies" ("name", "date", "length", "genre_id")
                                VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [movieToAdd.name, movieToAdd.date, movieToAdd.length, movieToAdd.genre_id])
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
    const queryText= `SELECT "m".*, "Genre"."genre" FROM "movies" as "m"  JOIN "Genre" 
    ON "m"."genre_id" = "Genre"."id";`;
                                console.log('logging after get info');
    pool.query(queryText).then((result) => {
        res.send(result.rows);
        console.log(result.rows);
    }).catch(error => {
        console.log('error GET movies Router', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req,res) => {
    console.log('DELETE movies from router', req.params.id);
    const movieId = req.params.id;
    pool.query('DELETE FROM "movies" WHERE "id" = $1;', [movieId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error delete movie router', error);
            res.sendStatus(500);
        });

})
module.exports = router;