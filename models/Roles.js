const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Roles = new Schema({
    name: String
})

module.exports = mongoose.model('Roles', Roles)
