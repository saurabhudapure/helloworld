var express = require('express');
var fs = require('fs');
var router = express.Router();

router.post('/', function (req, res, next) {
    console.log("asee");
    res.render('listProduct');
});

router.post('/read', function (req, res, next) {
    fs.readFile('./example.json','utf-8', function read(err, data) {
        if (err) {
            throw err;
        }
        console.log("Read Sucessfull " + data + "\n");
        res.json(JSON.parse(data)); //JSON.parse(
});
});

module.exports = router;
