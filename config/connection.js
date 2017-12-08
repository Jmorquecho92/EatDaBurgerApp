var mysql = require('mysql');
var host = process.env.CLEARDB_DATABASE_URL || '127.0.0.1';
var connection;
//MYSQL Connection
if(process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db',
    });
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;