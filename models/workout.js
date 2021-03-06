const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const opt = { toJSON: { virtuals: true } } 

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                require: true
            },
            name: {
                type: String,
                trim: true,
                require: true
            },
            duration: {
                type: Number,
                trim: true,
                require: true
                
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
    ], 
},
{ toJSON: { virtuals: true } } 
);
// using virtual to work, to update the total duration, once a new workout is added
WorkoutSchema.virtual("totalDuration").get(function(){
// returning reduce
return this.exercises.reduce((total, time) => {
    // returning total + time.duration
    return total + time.duration
}, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;