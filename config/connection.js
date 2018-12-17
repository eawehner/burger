var mysql = require("mysql");

var connection = mysql.createConnection({
  //don't forget to make adjustments if you're running on your own machine or deploying elsewhere!
  host: "localhost",
  // port: 3306,
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