
var express = require('express');
var router = express.Router();
var Register = require('../Models/Register');

router.get('/', (req, res) => {
    Register.find((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.post('/', (req, res) => {
    Register.create((req.body), (err, data) =>{
        if(err) throw err;
        res.send(data);
    });
});


router.delete('/', (req, res) => {
    Register.findOne((err, data) => {
        if(err) throw err;
        if(!data)  {
            return res.status(404).send("The user doesn't exist");
        } 
        Register.deleteOne((err, data) => { 
            if(err) throw err;
            res.send(data);
        })
    })
})

module.exports = router;