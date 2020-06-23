const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "must enter a type"
            },
            name: {
                type: String,
                trim: true,
                required: "must enter a workout name"
            },
            duration: {
                type: Number,
                required: "must enter a duration time"
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
        }
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;