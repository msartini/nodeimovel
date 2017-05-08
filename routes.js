var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    //console.log('A custom router middleware');
    next();
});

router.get('/', function(req, res, next){
    //next(new Error('Custom error'));
});

router.get('/params/:name', function(req, res){
    res.json({
        params: req.params,
        host: req.hostname,
        headers: req.headers
    })
});

router.post('/body', function(req, res){
    res.json(req.body)
});

router.get('/res', function(req, res){
    res.status(200).json({
        name: 'Márcio',
        lastname: 'Sartini'
    });
});
module.exports = router;
