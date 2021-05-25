var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"zxj12138",
    database:"login"
})


connection.connect();
module.exports = connection;