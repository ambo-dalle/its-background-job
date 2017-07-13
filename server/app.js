const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/timejob', function(){
     console.log('connect to Database timejob');
})

const timejobs = require('./routes/timejob')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/timejobs', timejobs);

app.listen(3000, function(){
     console.log('alive');
})

module.exports = app;
