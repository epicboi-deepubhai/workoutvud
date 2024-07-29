const express = require("express")
const {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    remWorkout,
    updateWorkout
} = require("../controllers/workoutControllers")

const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', remWorkout)

router.patch('/:id', updateWorkout)

module.exports = router