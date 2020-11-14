const {Router} = require('express')
const controllers = require('../controllers/roleCreate')
const routes  = Router()

routes.post('/create', controllers.roleCreator)
routes.get('/rolesList', controllers.getRoles)

module.exports = routes
