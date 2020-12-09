const {Router} = require('express')
const controllers = require('../controllers/auth')
const upload = require('../middleware/upload')
const router = Router()

router.post('/login', controllers.login)
router.patch('/update/:id', controllers.updateToken)
router.post('/register', upload.single('avatar'), controllers.register)


module.exports = router
