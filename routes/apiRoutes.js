const router = require("express").Router();
const Workout = require('../models/index.js');

// api routes
router.get('/api/workouts', (req, res) => {
  Workout.find({})
    .then(workout => {
      res.json(workout);
    }).catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(workout => {
      res.json(workout);
    }).catch(err => {
      res.json(err);
    });
});

router.post(`/api/workouts`, ({ body }, res) => {
  Workout.create(body)
    .then(workout => {
      res.json(workout)
    }).catch(err => {
      json(err)
    });
});

router.put(`/api/workouts/:id`, ({ body, params }, res) => {
  Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } })
    .then(workout => res.json(workout))
    .catch(err => {
      json(err);
    });
});

module.exports = router;