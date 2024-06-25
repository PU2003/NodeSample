const express = require('express')
const router = express.Router()

UserController = require('../controller/UserController')

router.post('/add/user', UserController.createNewUser)                    // the request will be send to the appropriate method of the controller
router.get('/all',UserController.getUser)
router.get('/finduser/:id',UserController.findUser)
router.put('/update/:id',UserController.updateUser)
router.patch('/update/:id',UserController.updateUserById)
router.delete('/delete/:id',UserController.deleteUser)


module.exports = router;                                       