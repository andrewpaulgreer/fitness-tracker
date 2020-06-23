const router = require("express").Router();
const path = require("path");

// clicked on new workout, and got cannot get /workout
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

// clicked on the tacker dashboa, and said cannot get stats, needs to be linked
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = router;