var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mh_discord_bot_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE mh_discord_bot_db", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  var sql = "CREATE TABLE mute_command (userID VARCHAR(255), guildID VARCHAR(255), time INTEGER(24))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
