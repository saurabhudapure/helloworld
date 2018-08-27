var express = require('express');
var fs = require('fs');
// var data = require('../views/product');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('productInventory');
});

//---------------------------------------------------//
router.post('/', function (req, res, next) {
    const content = JSON.stringify(req.body);
    console.log("Inside Post method" + content + "\n");
    fs.appendFile('./example.json', content + ",\n]", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    // fs.readFile('./example.json','utf-8', function read(err, data) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("Read Sucessfull " + data + "\n");
    //     res.json(data);
    // });
});


// fs.readFile('./example.json', function read(err, data) {
//   
//   const content1 = data;
// });
// console.log( "the data from the file is" +content1);
// });

//---------------------------------------------------



router.get('/write', function (req, res, next) {
    fs.appendFile('/home/saurabhudapure/Desktop/productList.txt', req.data, function (err) {
        if (err) throw err;
        // res.write(data);
        console.log('Saved!');
        // res.end();
    });
    res.render('productInventory');
});

module.exports = router;

// fs.readFile('/home/saurabhudapure/Desktop/productList.txt', function (err, data) {
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     //res.write(data);
//     console.log('body: '+ data); //JSON.stringify(
//    // res.send(req.body);
//     // console.log(req.body.data);
//     // res.end();


// console.log(" pdetails POST");
    // res.render('productInventory');
    // console.log(" test ");
    // console.log(req.body);
    // const fs = require('fs');