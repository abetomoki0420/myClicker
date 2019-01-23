const mysql = require('mysql')
module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'material',
  password: 'material',
  database: 'materials'
});
