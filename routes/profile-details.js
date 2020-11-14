const {Router} = require('express')
const controllers = require('../controllers/profile-details')
const passport = require('passport')
const routes = Router()

routes.get('/:id', passport.authenticate('jwt', {session: false}), controllers.getProfile)

module.exports = routes
