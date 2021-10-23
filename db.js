/** Database for lunchly */

const pg = require("pg");

const DB_URI = `postgresql://postgres:${process.env.PSQL}@localhost:5432/lunchly`

const db = new pg.Client(DB_URI);

db.connect();

module.exports = db;
