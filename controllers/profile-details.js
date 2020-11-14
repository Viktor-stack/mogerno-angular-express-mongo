const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')
module.exports.getProfile = async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
            .select(' _id userName createDate roleID userPrise')
            .populate('roleID')
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}
