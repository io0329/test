require("dotenv").config();

const mysql = require('mysql2');
const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '0647133079', 
    database: 'gachon_db',
    port: 3307
  });

dbConnect.connect();

module.exports = dbConnect; 
