// Set up MySQL connection.
var mysql = require('mysql');

require('dotenv').config();

// var connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'superSecretPwd',
//   database: 'cat_db',
// });

var connection = mysql.createConnection({
  host: process.env.CATS_DB_HOSTNAME,
  port: 3306,
  user: process.env.CATS_DB_USER,
  password: process.env.CATS_DB_PASSWORD,
  database: process.env.CATS_DB_NAME,
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
