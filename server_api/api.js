const express = require('express');
const router = express.Router();
const Book = require('../schema/schema.js');


router.get('/show', function (req, res, err) {
  Book.find().then( list => {
    const lists = {result: 'ok',message: list}
    res.json(lists);
  }).catch(err)
});

router.post('/add', function (req, res, err) {
  Book.create(req.body).then(function(response){
    res.json(response);
  }).catch(err);
});

router.delete('/delete/:id', function (req, res, err) {
  Book.deleteMany({_id: req.params.id}).then(function(p){
    res.json(p);
  }).catch(err)
});

router.put('/update/:id', function (req, res, err) {
  Book.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Book.findOne({_id: req.params.id}).then(function(p){
      res.json(p);
    })
  }).catch(err)
})

module.exports = router;
