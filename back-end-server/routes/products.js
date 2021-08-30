
var express = require('express');
var router = express.Router();
var Kids = require('../Models/Meds');


router.get('/', (req, res) => {
    Kids.find((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.get('/:_id', (req, res) => {
    Kids.findById((req.params._id), (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.put('/:_id', (req, res) => {
    Kids.findById((req.params._id), (err, data) => {
        if(err) throw err;
        if(!data){
            return res.status(404).send("Product with this Id doesn't exist")
        }
    Kids.findByIdAndUpdate((req.params._id), (req.body), (err, data) => {
        if(err) throw err;
        res.send(data);
    })
    });
});

router.post('/', (req, res) => {
    Kids.create((req.body), (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

router.delete('/:_id', (req, res) => {
    Kids.findById((req.params._id), (err,data) => {
        if(err) throw err;
        if(!data){
            return res.status(404).send("Product doesn't exist with given Id.");
        }
        Kids.findByIdAndDelete(req.params._id, (err, data) => {
            res.send(data);
        }) 
    });
});


module.exports = router;