var mysql = require("mysql");

var connection = mysql.createConnection({
<<<<<<< HEAD
  //don't forget to make adjustments if you're running on your own machine or deploying elsewhere!
  host: "localhost",
  // port: 3306,
=======
  host: "localhost",
  //commented out for heroku deploy
  //port: 3306,
  //insert your credentials and host here
>>>>>>> ad4e601d7a469bfd4788c6e89a5d94c67ef2d4f1
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
