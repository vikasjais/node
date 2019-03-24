var http = require("http");
var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
//---------------------------------------------//
   var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Database4"
});

//-------------------------------------------//
app.get('/send', function (req, res) {
var rr="<html>";
rr = rr+"<body>";
rr=rr+"<form  method='post' action='thank' >";
rr = rr+"roll number"+"<input type='number' name='one' value=' '>";
rr = rr+"per "+"<input type='number' name='two' value=' '>";
rr = rr+"name "+"<input type='text' name='three' value=' '>";
rr = rr+"<input type='submit' name='t1' value='send '>";
rr = rr+"</form>";
rr = rr+"</body>";
res.send(rr);

  
})
app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
   roll = req.body.one;
  per=req.body.two;
  name=req.body.three;
  var sql =" insert into stud1(roll,per,name) values("+roll+","+per+","+"'"+name+"')";
  //var sql1 = "select * from stud1 where roll='"+roll+"'";
//var sql =" insert into stud5(name,roll,per) values('"+name+"'"+","+roll+","+per+")";
//--------------------------------------------------------------------------------------//
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
con.query(sql, function (err, result) {
 if (err) throw err; 
  res.write("rec inserted");
  console.log("Inserted");
 });

//------------------------------------------------------------------------------------//
 res.write("record inserted");
  res.end();
 }).listen(9000);