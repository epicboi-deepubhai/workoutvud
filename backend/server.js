require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //req
        app.listen(process.env.PORT, () => {
            console.log("connected to db\nlistening on port 4000")
        })
    })
    .catch((error) => {
        console.log(error)
    })

