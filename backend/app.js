const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
require("dotenv").config()

//MONGO CREDENTIAL
const username = process.env.MONGO_INITDB_ROOT_USERNAME
const password = process.env.MONGO_INITDB_ROOT_PASSWORD
const dbName = process.env.MONGO_INITDB_DATABASE

const url = 'mongodb://' +
    username + ':' +
    password + '@' +
    'mongodb' + ':' +
    27017 + '/' +
    dbName + '?authSource=' +
    'admin'

const mongoOptions = {
    user: username,
    pass: password,
    dbName: dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false
}


const PORT = 3000
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//ROUTES DEFINE
const messageRoute = require('./routes/messageRoute')


//ROUTES IMPLEMENTATION
app.use('/api', messageRoute)


app.get('/healtcheck', (req, res) =>{
    res.send('OK')
    res.end()
})


const LOG_TAG = '\t[MONGODB]\t|'

mongoose.connect(url, mongoOptions)
    .then(() => {
        console.log(LOG_TAG + 'Connected')
    })
    .catch((error) => {
        console.trace(error)
    })

app.listen(PORT, () =>{
    console.log('\t[EXPRESS:]\t|' + PORT)
})


