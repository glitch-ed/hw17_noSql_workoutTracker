const db = require("../models");
require("mongoose");


module.exports = (app) => {

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });


    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });



    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })

        .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });



    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7).then(data => res.json(data))
            // .then(dbWorkout => {
            //     res.json(dbWorkout);
            // })
            .catch(err => {
                res.status(400).json(err);
            });
    });


}