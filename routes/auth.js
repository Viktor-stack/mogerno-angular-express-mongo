const {Router} = require('express')
const controllers = require('../controllers/auth')
const router = Router()

router.post('/login', controllers.login)
router.patch('/update/:id', controllers.updateToken)
router.post('/register', controllers.register)


module.exports = router
