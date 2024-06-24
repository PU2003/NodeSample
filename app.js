const express = require('express')                                   // returning the function which is then storing in the express

const app = express()                                                // invoking the function of express in order to make an instance of express like 'app'
const dotenv = require('dotenv');
const mongoose = require("mongoose")
const userRoutes = require('./controller/UserController')


dotenv.config();

const mongoUri = process.env.MONGO_URI;
const PORT = process.env.PORT ;
app.use(express.json());

const connectDB = async () => {
    
    await mongoose.connect(mongoUri)
    .then(() => {

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);

        });

        console.log("connected to MongoDb")
    })
    
}

connectDB(); 

app.use(userRoutes)

// app.post('/add/user',(req,res) => {
//     const user = new User({
//         email:"lisa@123.gmail.com",
//         name:"lalisa",
//         age:"35",
//         city:"Seoul",
//         zipCode:"111034"
//     })

//     user.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// })

// app.get('/all',(req,res) => {

//     User.find()
//     .then((result) => {                                          // these are asynchronous methods which will fire call back function when it will find
//         res.send(result)                                         // the user
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// app.get('/finduser',(req,res) => {

//     User.findById('6679aba2442467e2b1983436')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// })

// app.put('/update/:id',(req,res) => {

//     const id = req.header.id

//     User.findByIdAndUpdate(id,{name:"cocoa"})

//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// app.delete('./delete/:id',(req,res) => {

//     const id = req.params.id;
//     User.findByIdAndDelete(id)

//     .then((result) => {
//         res.send(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     res.status(200).json({ message: `Deleted user with ID ${userId}` });
// })


// listen for requests
// app.listen(3000)                                                     // it will automatically infers that we want to use the localhost

// app.get('/', (req,res) => {                                          // first argument is the path and there is a function which take the req and res
    
//     res.sendFile("./views/index.html",{root: __dirname})             // the benifit of using send method of express is that it will automatically infer
//                                                                     // the type of content that we're trying to send to the browser and also sets the header type.
// })                                                                  // i will also infers the statusCode automatically 

// app.get('/about', (req,res) => {
//     res.sendFile("./views/about.html",{root: __dirname})               // we have to tell the express from where is it relative form,express will look for an abasolute path
//                                                                      // telling that root should be the folder and the mentioned will be the relative path                                          
// }) 

// //redirects
// app.get('/about-us',(req,res) => {
//     res.redirect('/about')                                           
// })

// // 404 Page
// app.use((req,res) => {
//     res.sendFile("./views/404.html",{root: __dirname})                  // 'use' is used to tell that use it for every request which is passed,
//                                                                         // not when the specific url is matched,like in other cases and you should notice 
//                                                                         // that we are not passing any specific path as an argument
// })

