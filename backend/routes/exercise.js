const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    console.log('GET excercise');
    Exercise.Find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('error :' + err));
});


router.route('/add').get((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date =  Date.parse(req.body.date);

    console.log('add excercise');
    const newExcercise = new Exercise({
        username ,
        description,
        duration,
        date,
    });
    
    newUser.save().then(() => res.json('excercise added!')).catch(err => res.status(400).json('Error : '+ err));
});

module.exports = router;