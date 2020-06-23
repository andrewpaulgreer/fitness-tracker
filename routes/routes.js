const router = require("express").Router();
const path = require("path");

// clicked on new workout, and got cannot get /workout
router.get("/exercise", (req, res) => {
    const exPage = "../public/exercise.html"
    res.sendFile(path.join(__dirname, exPage))
})

// clicked on the tacker dashboa, and said cannot get stats, needs to be linked
router.get("/stats", (req, res) => {
    const statPage = "../public/stats.html"
    res.sendFile(path.join(__dirname, statPage))
})

router.get("/api/workout", (req,res) => {

})

router.get("/api/workout/range", (req,res) => {

})

module.exports = router;