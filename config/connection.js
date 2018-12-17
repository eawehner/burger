var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  //commented out for heroku deploy
  //port: 3306,
  //insert your credentials and host here
  user: "",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
