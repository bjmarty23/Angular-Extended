const Pool = require('pg').Pool();
const url = require('url');
let config;
const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log('postgresql(pg) connected ');
});
pool.on('error', (err, client) => {
    console.log('error connecting to pg', error);
    process.exit(-1);
})

module.exports = pool;