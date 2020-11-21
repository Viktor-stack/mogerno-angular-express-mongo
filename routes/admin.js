const {Router} = require('express')
const controllers = require('../controllers/admin')
const passport = require('passport/lib/')
const router = Router()


router.get('/users', passport.authenticate('jwt', {session: false}), controllers.getAll)
router.get('/user/:id', passport.authenticate('jwt', {session: false}), controllers.getByIDUsers)
router.patch('/user/:id/edit', passport.authenticate('jwt', {session: false}), controllers.update)


module.exports = router
