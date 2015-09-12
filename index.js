var _ = require('underscore');
var express = require('express');
//var fibonacci = require ('fibonacci');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Fibonacci engine initialized...\n' +
           'Generate fibbonacci series by calling: http://localhost:' + PORT + '/fib/num\n' +
           'For eg: curl http://localhost:' + PORT + '/fib/5\n' );
});

var recursive = function(n) {
var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

app.get('/fib/:num', function (req, res) {
    var regex=/^[0-9]+$/;
    if (!req.param("num").match(regex))
    {
      res.send("Input should be a positive number\n");
    }
  var value = _.map(_.range(1, parseInt(req.param("num")) + 1), function(item) {return recursive(item)});
  res.send("Fibonacci series for num (" + req.param("num") +  "):" + value  + "\n");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
