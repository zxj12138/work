var express = require('express');
var path = require('path');
var ejs = require('ejs');
var app = express();
var indexctr = require("./routes/indexctr")
var consolectr = require("./routes/consolectr")

app.set('views',path.join(__dirname,'views'));
app.engine('.html',ejs.__express);
app.set('view engine','html');

app.use(express.static(path.join(__dirname,'public')));

app.use("/",indexctr);
app.use("/admin",consolectr);

app.listen(3000);

