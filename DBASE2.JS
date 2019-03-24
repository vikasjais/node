var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Database4"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE stud1(name varchar(30),roll int(5),per int(5))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});