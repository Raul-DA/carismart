var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 let p = new Object();
 p.nombre="luis";
 p.edad=28;
 res.json(p);
});

module.exports = router;
