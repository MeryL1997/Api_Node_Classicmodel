var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'68.183.102.193',
    user:'root',
    password:'2020Mery',
    database:'classicmodels'
});
connection.connect(function(error){
    if(!!error) {
        console.log(error);
    } else {
        console.log('Connected..!');
    }
});

module.exports = connection;


