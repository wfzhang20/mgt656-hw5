var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! Does this even work?');
});

app.get('/nickname', function(request, response){
    response.send('tough-armadillo');
});

app.listen(process.env.PORT || 4000);