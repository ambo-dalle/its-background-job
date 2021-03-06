var express = require('express')
var router = express.Router();
var Users = require('../controllers/job_controller')

router.post('/signup', Users.SignUp)
router.get('/', Users.findAllUsers)
router.delete('/:id', Users.deleteUser)

module.exports = router
