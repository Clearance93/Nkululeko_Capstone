
let express = require('express');
let router = express.Router();
let Sale = require('../Models/Sale');


router.get('/', (req, res) => {
    Sale.find((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.get('/:_id', (req, res) => {
    Sale.findById((req.params._id), (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.put('/:_id', (req, res) => {
    Sale.findById((req.params._id), (err,data) => {
        if(err) throw err;
        if(!data) {
            return res.status(404).send("No product consist of this Id")
        }
      Sale.findByIdAndUpdate((req.params._id), (req.body), (err, data) => {
          if(err) throw err;
          res.send(data);
      })  
    });
});


router.post('/', (req, res) => {
    Sale.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.delete('/:_id', (req, res) => {
    Sale.findById((req.params._id), (err,data) => {
        if(err) throw err;
        if(!data) {
            return res.status(404).send("No product consist of this Id")
        }
      Sale.findByIdAndDelete((req.params._id), (err, data) => {
          if(err) throw err;
        //   res.send(data);
      })  
    });
});


module.exports = router;