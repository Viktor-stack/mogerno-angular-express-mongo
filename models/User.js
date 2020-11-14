const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatarSrc: {
        type: String,
        default: ''
    },
    userName: {
        type: String,
        required: true
    },
    userPrise: {
        type: Number,
        default: 0
    },
    roleID: {
        type: mongoose.Types.ObjectId,
        ref: 'Roles'
    },
    createDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', userSchema)
