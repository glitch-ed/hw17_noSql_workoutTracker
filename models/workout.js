const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter the type of exercise"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter the name of the exercise"
        },
        duration: {
          type: Number,
          required: "Enter the duration you exercised in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }]
  
    },{ toJSON: {
      // Virtuals for when indivitual data is requested.
      virtuals: true
    }
  }
);

// adds the property to schema
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;