const router = require('express').Router();
const pool =require('../modules/pool.js');

//controller GET route
router.get('/', (req, res) => {
    console.log('GET/controller');
    //table binding here
    //const queryText= 

    pool.query(qeuryText).then(result => {
        res.send(result.row);
    }).catch(error => {
        console.log('error GET collection Router', error);
        res.sendStatus(500);
    });
});