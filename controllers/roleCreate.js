const Roles = require('../models/Roles')
const errorHandler = require('../utils/errorHandler')


module.exports.getRoles = async (req, res) => {
    try {
        const rolesList = await Roles.find()
        res.status(200).json(rolesList)
    } catch (e) {
        errorHandler(res, e)
    }
}


module.exports.roleCreator = async (req, res) => {
    try {
        const role = await new Roles({
            name: req.body.name
        })
        role.save()
        res.status(200).json({
            role
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
