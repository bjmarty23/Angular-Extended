const pg = require('pg');
const Pool = pg.Pool;
const url = require('url');
const config =  {
    database: 'hadar',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeOutMillis: 30000
}

const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log('postgresql(pg) connected ');
});
pool.on('error', (err, client) => {
    console.log('error connecting to pg', error);
    process.exit(-1);
});

module.exports = pool;