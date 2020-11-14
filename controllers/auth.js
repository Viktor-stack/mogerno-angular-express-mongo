const User = require('../models/User')
const keys = require('../config/keys')
const bcrypt = require('bcryptjs/dist/bcrypt')
const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
    try {
        const candidate = await User.findOne({email: req.body.email})
            .populate('roleID')
        if (candidate) {
            const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
            if (passwordResult) {
                // Генерация token
                const token = jwt.sign({
                    email: candidate.email,
                    userID: candidate._id
                }, keys.jwt, {expiresIn: 60 * 60})
                res.status(200).json({
                    userID: candidate._id,
                    userName: candidate.userName,
                    email: candidate.email,
                    avatarSrc: candidate.avatarSrc,
                    roleName: candidate.roleID.name,
                    roleID: candidate.roleID._id,
                    token: `Bearer ${token}`
                })
            } else {
                res.status(401).json({
                    message: 'Пароль не совпадает попробуйте снова!'
                })
            }
        } else {
            res.status(404).json({
                message: 'Такой пользователь не найден'
            })
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.register = async function (req, res) {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        res.status(409).json({
            message: 'Такой Email уже занят!'
        })
    } else {
        //    Нужно создать пользователя!
        const salt = await bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            userName: req.body.userName,
            avatarSrc: req.body.avatarSrc,
            password: bcrypt.hashSync(password, salt),
            roleID: '5f8e39e459081822bc1eeb51'
        })

        try {
            await user.save()
            await user.populate('roleID')
            res.status(201).json({
                message: 'Пользователь создан!',
                user
            })
        } catch (e) {
            errorHandler(res, e)
        }
    }
}


