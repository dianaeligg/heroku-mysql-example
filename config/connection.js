// Set up MySQL connection.
var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'superSecretPwd',
//   database: 'cat_db',
// });

var connection = mysql.createConnection({
  host: 'hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'nbthdih0cznyu1yn',
  password: 'h0rny9wkpbchmfon',
  database: 'ynl0hz6q3ductf4a',
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
