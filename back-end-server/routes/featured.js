

let express = require('express');
let router = express.Router();
let Featured = require('../Models/Featured');


router.get('/', (req, res) => {
    Featured.find((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.get('/:_id', (req, res) => {
    Featured.findById((req.params._id), (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.post('/', (req, res) => {
    Featured.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.put('/:_id', (req, res) => {
    Featured.findById((req.params._id), (err, data) => {
        if(err) throw err;
        if(!data){
            return res.status(404).send("The product with that id doesn't exist");
        }
        Featured.findByIdAndUpdate((req.params._id), (req.body), (err, data) => {
            if(err) throw err;
            res.send(data);
        })    
    });
});


router.delete('/:_id', (req, res) => {
    Featured.findById((req.params._id), (err, data) => {
        if(err) throw err;
        if(!data){
            return res.status(404).send("The product with that id doesn't exist");
        }
        Featured.findByIdAndDelete((req.params._id), (err, data) => {
            if(err) throw err;
            // res.send(data);
        })    
    });
});

module.exports = router;