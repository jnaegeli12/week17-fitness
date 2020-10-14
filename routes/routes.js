const path = require('path');
const Workout = require('../models');
const router = require("express").Router();
const Exercise = require("../models/exercise");

// html routes
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

// api routes
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      console.log(Workout);
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      console.log(Workout);
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Exercise.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  Workout.update(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
