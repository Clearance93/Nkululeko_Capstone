
var express = require('express');
var router = express.Router();
var Admin = require('../Models/Admin');


router.get('/', (req, res) => {
    Admin.find((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.post('/', (req, res) => {
    Admin.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


module.exports = router;