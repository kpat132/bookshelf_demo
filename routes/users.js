const express = require('express');

//User is a class
const User = require('../db/models/User')
const router = express.Router();

router.route(`/`)
  .post((req, res) => {

  })
  .get((req, res) => {
    return User
    .fetchAll()
    .then (users => {
      return res.json(users);
    })
    .catch(err => {
      return res.json({ message: err.message });
    });
  })
  router.route('/:id')

  .get((req,res) => {
    return new User({id: req.params.id})
    .fetch()
    .then(user => {
      return res.json(user);
    })
    .catch(err => {
      return res.json({message: err.message});
    })
    

  })


module.exports = router;