const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://breno:Br3n0@cluster0-fxdie.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use(require('./routes'))

app.listen(3000)

//stop at 30min - configuring Post method