var http = require('http');
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
app.get('/send',function (req,res){
var rr="<html>";
rr=rr+"<body>";
rr=rr+"<form method='post' action='add'>";
rr=rr+"first_number"+"<input type='number' name='one' value='first'><br>";
rr=rr+"second_number"+"<input type='number' name='two' value='second'> <br>";
rr=rr+"<input type='submit' name='t1' value='Add'> <br> ";
rr=rr+"</form>";
rr=rr+"</body>";
res.send(rr);
})
app.post('/add', urlencodedParser,function(req,res){
    var a=req.body.one;
    var b=req.body.two;
    a=parseInt(a);
    b=parseInt(b);
    var c=a+b;
    res.send('Sum is'+c);
}).listen(9000)
