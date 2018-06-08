const router = require('express').Router();
const pool =require('../modules/pool.js');

//post movie to database
router.post('/', (req, res) => {
    console.log('POST/GENRE',req.body);
    const genreToAdd = req.body;
    let queryText = `INSERT INTO "Genre" ("name")
                                VALUES ($1);`;

    pool.query(queryText, [genreToAdd.name])
    .then( (result) => {
    res.sendStatus(201);
    }).catch((error) => {
        console.log('Failed IN genre POST', error);
        res.sendStatus(500);
    });
});

//get all genres from database
router.get('/', (req, res) => {
    console.log('GET/genre router');
    //table binding here
    const queryText=   `SELECT "g".* FROM "Genre" as "g" LEFT JOIN "movies" as "m" 
                        ON "g"."id" = "m"."genre_id"
                        GROUP BY "g"."id"`
                                console.log('logging after get info');
    pool.query(queryText).then((result) => {
        res.send(result.rows);
        console.log(result.rows);
    }).catch(error => {
        console.log('error GET movies Router here', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req,res) => {
    console.log('DELETE genre from router', req.params.id);
    const genreId = req.params.id;
    pool.query('DELETE FROM "Genre" WHERE "id" = $1;', [genreId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error delete genre router', error);
            res.sendStatus(500);
        });

})
module.exports = router;