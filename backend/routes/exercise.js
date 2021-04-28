const router = require('express').Router();
const { response } = require('express');
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
  console.log('inside get by id' + req);
  Exercise.findById(req.params.id)
  .then((ex) => {
    res.json(ex);
    console.log('inside get by id' + ex); })
  .catch(err => res.status(400).json('Error: ' + err))
});


router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
  .then((ex ) => res.json('Exercise deleted' + ex.id))
  .catch(err => res.status(400).json('delete operation failed, Error: ' + err))
});


router.route('/update/:id').post((req,res) => {
  console.log('update get by id');
  Exercise.findById(req.params.id)
  .then(ex => {
    ex.username = req.body.username;
    ex.description = req.body.description;
    ex.duration = Number(req.body.duration);
    ex.date = Date.parse(req.body.date);
    console.log(' inside update get by id' + ex);
    ex.save()
    .then((ex) => res.json('updated!' +ex.id))
    .catch( err => res.status(400).json('error in saving the updated info: ' + err))
  })
  .catch(err => res.status(400).json('Error in updating :' + err))
});

module.exports = router;