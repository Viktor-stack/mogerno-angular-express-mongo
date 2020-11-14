const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')


module.exports.getAll = async (req, res) => {
    try {
        const users = await User.find()
            .populate('roleID')
        res.status(200).json(users)
    } catch (e) {
        errorHandler(res, e)
    }
}


module.exports.getByIDUsers = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .select('email userName')
            .populate('roleID', 'name')
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        )
            .select('_id userName email')
            .populate('roleID')
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res.e)
    }
}
