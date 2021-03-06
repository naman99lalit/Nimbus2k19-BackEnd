const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

// Import Routes and Keys
const authRoutes = require('./routes/routes.auth')
const eventRoutes = require('./routes/routes.events')
const keys = require('./keys')

// Import DB Models
const Users = require('./models/users')
const Events = require('./models/events')
const Participants = require('./models/participants')
const Teams = require('./models/teams')

mongoose.connect(keys.mongo.url, {useNewUrlParser: true, useCreateIndex: true}, () => console.log('DB Connected'))

var app = express()

app.use('/auth', authRoutes)
app.use('/events', eventRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => console.log('Port Up'))