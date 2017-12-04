var express = require('express');
var app = express();
var path = require("path");
var port = 8888;
var router = require("./router")
var api = require("./static/js/api")

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next();
});

app.use("/",api);
app.use(router);
app.use(express.static(path.join(__dirname, 'static')));

app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
});

