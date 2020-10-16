const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [{
    type: {
      type: String,
      required: "Choose type"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter the name of your exercise."
    },
    distance: {
      type: Number
    },
    duration: {
      type: Number
    },
    weight: {
      type: Number
    },
    sets: {
      type: Number
    },
    reps: {
      type: Number
    }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;