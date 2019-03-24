
var url = require('url');
var http = require('http');

http.createServer(handle).listen(8000);

function handle(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello World!');
    res.write('\n');
    var q = url.parse(req.url, true).query;
    
    var A = q.a;
    var B=q.b;
    var C=q.c;
     A=parseInt(A);
     B=parseInt(B);
     C=parseInt(C);
     var D=greatest(A,B,C);
    var c=add(A,B,C);
    res.write('Sum of'+A+' '+B+' '+C+' is'+ c);
    res.write("<br>");
    res.write('Greatest Among a,b,c is    '+D);
    res.end("<h1>Good Morning! </h1>");
  //res.write("ITS end");
}

function add(a,b,c){
    var d=a+b+c;
    return d;
}
function greatest(A,B,C){
if(A>B&&A>C)
return A;
else if(B>A&&B>C)
return B;
else return C;
}