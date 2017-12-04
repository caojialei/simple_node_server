var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/static/html/rights_interest.html');
});
router.get('/pro', function (req, res, next) {
    res.sendFile(__dirname + '/static/html//pro.html');
});
module.exports = router;