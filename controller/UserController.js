const express = require('express')

const router = express.Router()
const User = require('../database');

router.post('/add/user',(req,res) => {
    const user = new User(req.body)

    user.save()
    .then((result) => {
        res.send(result)
    })
    .catch((error) => {
        console.log(error)
    })
})

router.get('/all',(req,res) => {

    User.find()
    .then((result) => {                                          // these are asynchronous methods which will fire call back function when it will find
        res.send(result)                                         // the user
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/finduser',(req,res) => {
    
    const id = req.body.id
    User.findById(id)
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })

})

router.put('/update/:id',(req,res) => {

    const id = req.params.id
    
    User.findByIdAndUpdate(id,req.body,{ new: true })
    .then((result) => {
        res.send(result)
    })      
    .catch((err) => {
        console.log(err)
    })    
        
})

router.patch('/update/:id',(req,res) => {

    const id = req.params.id
    
    User.findByIdAndUpdate(id,req.body,{ new: true })
    .then((result) => {
        res.send(result)
    })      
    .catch((err) => {
        console.log(err)
    })    
        
})

router.delete('/delete/:id',(req,res) => {

    const id = req.params.id;
    User.findByIdAndDelete(id,{ new: true })

    .then((result) => {
        res.send(result)
    })
    .catch((error) => {
        console.log(error)
    })
    
})

module.exports = router