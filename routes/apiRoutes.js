const router = require("express").Router();
const Workout = require('../models');

// api routes
router.get('/api/workouts', (req, res) => {
  Workout.find({})
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  Workout.update(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
