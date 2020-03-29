//////////////////////////////
//  users route endpoints   //
//////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model'); // Mongoose user model

// endpoint for getting all users (GET)
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// endpoint for adding a new user (POST)
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({username, password});

  // Saving new user to database
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;