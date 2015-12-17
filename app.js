var express = require('express');
var app     = express();
app.use(express.static(__dirname + '/module'));
app.listen(3000);