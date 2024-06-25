const express = require('express')
const router = express.Router()

const UserController = require('../controller/UserController')

router.post('/add/user', UserController.createNewUser) //UserController.addUser)                    // the request will be send to the appropriate method of the controller
router.get('/all',UserController.getUser)
router.get('/finduser/:id',UserController.findUser)
router.put('/update/:id',UserController.updateUser)
router.patch('/update/:id',UserController.updateUserById)
router.delete('/delete/:id',UserController.softDeleteUserById)


module.exports = router;                                        // router is the instance of express.Router()
                                                     // but if you define like {router} it becomes the object with property name 'router'