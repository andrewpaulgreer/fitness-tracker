const router = require("express").Router();
const path = require("path");

const db = require("../models")

router.get("/", (req, res) => {
    const statPage = "../public/index.html"
    res.sendFile(path.join(__dirname, statPage))
})

// clicked on new workout, and got cannot get /workout
router.get("/exercise", (req, res) => {
    const exPage = "../public/exercise.html"
    res.sendFile(path.join(__dirname, exPage))
})

// clicked on the tacker dashboard, and said cannot get stats, needs to be linked
router.get("/stats", (req, res) => {
    const statPage = "../public/stats.html"
    res.sendFile(path.join(__dirname, statPage))
})

//-------------API ROUTES ------------------

// getting all 
router.get("/api/workouts", (req, res)=> {
    db.Workout.find({}).then(dbData => {
        res.json(dbData)
    }).catch(err => {
        res.json(err)
    });
});

router.post("/api/workouts", ({body},res) => {
    db.Workout.create(body)
    .then(dbData => {
        res.json(dbData)
    }).catch(err => {
        res.json(err);
    });
});


// make API route with range
router.get("/api/workouts/range", (req,res) => {
    db.Workout.find({})
    .then(dbData => {
        res.json(dbData)
    }).catch(err => {
        res.json(err)
    })
})
// router.post("/api/workouts/range", (req,res) => {
//     Workout.create({})
//     .then(dbData => {
//         res.json(dbData)
//     }).catch(err => {
//         res.json(err)
//     })
// })
// got a console error sying PUT with workouts/undefined, so I will need an ID too
router.put("api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
        {
            "_id": req.params.id
        },
        {
            $inc: {"totalDuration": req.body.duration},
            $push: {"exercises": req.body}
        }, 
         (err, updated) => {
        if (err) res.status(500).json(err);
        res.json(updated);
    }
    )
});

module.exports = router;