const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const mongoose = require('mongoose')
const passport = require('passport')

const createRole = require('./routes/creatorRoles')
const authRoute = require('./routes/auth')
const profileRoute = require('./routes/profile-details')
const adminRoute = require('./routes/admin')
const app = express()

mongoose.connect(keys.mongooURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('MongooDB connected!!!'))
    .catch((error) => console.log(error))


app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())


app.use('/api/auth', authRoute)
app.use('/api/admin', adminRoute)
app.use('/api/profile', profileRoute)


// Создание Роли
app.use('/api/role', createRole)


if (process.env === "production") {
    app.use(express.static('client/dist/client'))
    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname, 'client', 'dist', 'client', 'index.html'
            )
        )
    })
}


module.exports = app
