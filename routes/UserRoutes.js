const express = require('express')
const router = express.Router()

UserController = require('../controller/UserController')

router.post('/add/user', UserController.createNewUser)                    // the request will be send to the appropriate method of the controller
router.get('/all',UserController.getUser)
router.get('/finduser/:userId',UserController.findUser)
router.put('/update/:userId',UserController.updateUser)
router.patch('/update/:userId',UserController.updateUser)
router.delete('/delete/:userId',UserController.deleteUser)


module.exports = router;                                       